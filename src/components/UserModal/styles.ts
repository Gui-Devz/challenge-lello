import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 300px;

  background: var(--white);

  border-radius: 4px;

  padding: 1rem 2rem;

  h4 {
    font-weight: bold;
    color: var(--blue);
  }

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const CloseButton = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 1000;
`;

export const Content = styled.div`
  span {
    font-weight: bold;
    color: var(--blue);
  }
`;
