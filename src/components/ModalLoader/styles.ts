import styled from "styled-components";

export const Modal = styled.div`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;

  right: 0;
  width: 100vw;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(24px);

  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover p {
    text-decoration: none !important;
  }
`;
