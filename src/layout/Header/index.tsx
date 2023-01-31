import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HamburguerMenu } from "../../components/HamburguerMenu";
import { LinkTag } from "../../components/LinkTag";
import { Logo } from "../../components/Logo";
import { NavModal } from "../../components/NavModal";
import { Container, HeaderTag, LinkContainer } from "./styles";

export const Header = () => {
  const [headerStyles, setHeaderStyles] = useState<string>("default");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const listenScrollEvent = (event) => {
    if (window.scrollY > 50 && window.scrollY < 420) {
      setHeaderStyles("variant");
    } else if (window.scrollY < 50) {
      setHeaderStyles("default");
    } else if (window.scrollY >= 420) {
      setHeaderStyles("showButton");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <HeaderTag
      className="container-fluid text-center p-4 m-0"
      config={headerStyles}
    >
      <Container className="d-flex m-auto position-relative">
        <div className="d-lg-none position-absolute">
          <button
            onClick={handleShow}
            className="bg-transparent border-0 w-auto"
          >
            <HamburguerMenu />
          </button>
        </div>
        <ul className="d-block w-100 d-lg-flex justify-content-between">
          <li className="first d-flex justify-content-center m-auto m-lg-0">
            <Logo />
          </li>

          <div className="d-lg-flex gap-5 align-items-center">
            <li className="d-none d-lg-block">
              <Link to="/">Home</Link>
            </li>
            <li
              className={`d-none d-lg-block ${
                headerStyles !== "showButton" && "me-lg-4"
              }`}
            >
              <Link to="/usuarios">Usuários</Link>
            </li>
            <LinkContainer
              className={`link first d-none ${
                headerStyles === "showButton" && "d-lg-block"
              }`}
            >
              <LinkTag className="p-2 ps-3 pe-3" type="button" href={"#form"}>
                Cadastrar
              </LinkTag>
            </LinkContainer>
          </div>
        </ul>
      </Container>

      <div className="position-absolute top-0 start-0 w-50 z-index-0">
        {showModal && <NavModal handleClose={handleClose} />}
      </div>
    </HeaderTag>
  );
};
