import { format } from "date-fns";
import { useEffect, useState } from "react";
import { IUser } from "../../@Types/Users";
import { useAPI } from "../../hooks/useAPI";
import { LoadingSpin } from "../LoadingSpin";
import { CloseButton, Container, Content } from "./styles";

interface IUserModalProps {
  url: string;
  closeModal: () => void;
}

export const UserModal = ({ url, closeModal }: IUserModalProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const { fetchGET, loading, response } = useAPI();
  useEffect(() => {
    fetchGET({ url });
  }, []);

  useEffect(() => {
    if (response?.data?.login) {
      setUser(response.data);
    }
  }, [response]);

  return (
    <Container className="position-relative">
      <CloseButton
        onClick={closeModal}
        className="position-absolute top-0 end-0 mt-2 me-2 bg-transparent border-0"
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </CloseButton>
      {loading && (
        <div className="d-flex flex-column align-items-center mt-5 pt-5">
          <LoadingSpin />
          <p>Carregando ....</p>
        </div>
      )}
      {!loading && user?.login && (
        <>
          <div className="d-flex mt-3 gap-2 align-items-center justify-content-center">
            <img src={user.avatar_url} alt="" />
            <h4 className="m-0">{user.login}</h4>
          </div>
          <Content className="d-flex flex-column align-items-center text-left w-75 m-auto mt-5">
            <p className="w-100">
              <span> Repositórios:</span> {user.public_repos}
            </p>
            <p className="w-100">
              <span>Seguidores:</span> {user.followers}
            </p>
            <p className="w-100">
              <span>Última sessão:</span>{" "}
              {format(new Date(user.updated_at), "dd/MM/yyyy")}
            </p>
          </Content>
        </>
      )}
    </Container>
  );
};
