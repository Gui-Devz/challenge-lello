import styled from "styled-components";

export const NavContainer = styled.nav`
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.1);

  border-radius: 0.2rem;
  z-index: 100;

  animation: slidein 0.5s ease-in-out forwards;

  @keyframes slidein {
    from {
      left: -500px;
    }
    to {
      left: 0;
    }
  }

  li {
    width: fit-content;
    margin: 0 auto;
  }

  li a {
    font-size: 1.1rem;
    font-weight: bold;
  }
  li a:hover {
    color: #000;
  }
`;

export const CloseButton = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 1000;
`;
