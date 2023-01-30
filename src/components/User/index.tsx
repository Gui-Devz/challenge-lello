import { useCallback, useState } from "react";
import { IUsers } from "../../@Types/Users";
import { ModalLoader } from "../ModalLoader";
import { UserModal } from "../UserModal";
import { Container } from "./styles";

interface IUserProps {
  userGeneric: IUsers;
}

export const User = ({ userGeneric }: IUserProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };
  // const closeModal = useCallback(() => {
  //   setShowModal(false);
  // }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Container
        onClick={openModal}
        className="d-flex align-items-center gap-2"
      >
        <img src={userGeneric.avatar_url} alt="" />
        <p>{userGeneric.login}</p>
      </Container>
      <ModalLoader isOpen={showModal}>
        <UserModal url={userGeneric.url} closeModal={closeModal} />
      </ModalLoader>
    </>
  );
};
