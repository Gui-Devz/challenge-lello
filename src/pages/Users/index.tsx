import { useEffect, useState } from "react";
import { LoadingSpin } from "../../components/LoadingSpin";
import { useAPI } from "../../hooks/useAPI";
import { Header } from "../../layout/Header";
import {
  ButtonContainer,
  Container,
  SearchBar,
  UserContainer,
  UsersLayout,
} from "./styles";

import { ReactComponent as Search } from "../../assets/lupa.svg";
import { IUsers } from "../../@Types/Users";
import { User } from "../../components/User";

export const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([
    // {
    //   login: "AleksanderBodurri",
    //   avatar_url: "https://avatars.githubusercontent.com/u/39253660?v=4",
    //   url: "https://api.github.com/users/AleksanderBodurri",
    // },
    // {
    //   login: "AleksanderBodurri",
    //   avatar_url: "https://avatars.githubusercontent.com/u/39253660?v=4",
    //   url: "https://api.github.com/users/AleksanderBodurri",
    // },
    // {
    //   login: "AleksanderBodurri",
    //   avatar_url: "https://avatars.githubusercontent.com/u/39253660?v=4",
    //   url: "https://api.github.com/users/AleksanderBodurri",
    // },
    // {
    //   login: "AleksanderBodurri",
    //   avatar_url: "https://avatars.githubusercontent.com/u/39253660?v=4",
    //   url: "https://api.github.com/users/AleksanderBodurri",
    // },
  ]);
  const [filteredUsers, setFilteredUsers] = useState<IUsers[]>([]);
  const [filter, setFilter] = useState<string>("");

  const { fetchGET, response, loading } = useAPI();

  const handleFilterForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const endpoint = "users";
    fetchGET({ endpoint });
  }, []);

  useEffect(() => {
    if (response?.data?.length > 0) {
      setUsers(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (users?.length > 0) {
      const filtered = users.filter((user) => {
        const regex = new RegExp(filter, "gi");
        const match = user.login.match(regex) ?? [];

        if (match[0]?.length > 0) {
          return true;
        }
        return false;
      });

      setFilteredUsers(filtered);
    }
  }, [filter]);

  return (
    <>
      <Header />
      <Container className="m-auto mt-5 p-4 p-lg-0 pt-lg-5">
        <h1>Usuários</h1>
        <div className="w-100">
          <form onSubmit={(e) => handleFilterForm(e)}>
            <SearchBar>
              <input
                className="w-100 mt-4"
                onChange={(e) => setFilter(e.target.value)}
                type="text"
                placeholder="Pesquisar por login"
              />
              <ButtonContainer>
                <button>
                  <Search width={20} height={20} />
                </button>
              </ButtonContainer>
            </SearchBar>
          </form>
        </div>
        {loading && (
          <div className="d-flex flex-column align-items-center mt-5 pt-5">
            <LoadingSpin />
            <p>Carregando ....</p>
          </div>
        )}
        {!loading && users?.length > 0 && filter.length === 0 && (
          <UsersLayout className="mt-5">
            {users.map((user, index) => {
              return (
                <div key={index}>
                  <UserContainer className="mt-4">
                    <User userGeneric={user} />
                  </UserContainer>
                </div>
              );
            })}
          </UsersLayout>
        )}
        {!loading && (filteredUsers.length > 0 || filter.length !== 0) && (
          <UsersLayout className="mt-5">
            {filteredUsers.map((user, index) => {
              return (
                <div key={index}>
                  <UserContainer className="mt-4">
                    <User userGeneric={user} />
                  </UserContainer>
                </div>
              );
            })}
          </UsersLayout>
        )}
      </Container>
    </>
  );
};
