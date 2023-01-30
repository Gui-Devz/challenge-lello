import styled from "styled-components";

export const Container = styled.div`
  max-width: 1170px;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
  h1 {
    font-size: 2.25rem;
    font-weight: bold;
    color: var(--cyan);
  }
`;

export const SearchBar = styled.div`
  max-width: 500px;
  position: relative;
  input {
    border: 1px solid var(--light-gray);
    padding: 0.5rem 2rem;
    border-radius: 4px;
  }
`;

export const ButtonContainer = styled.div`
  content: "";
  position: absolute;
  top: 27px;
  right: 10px;

  @media (min-width: 768px) {
    top: 31px;
  }

  button {
    background: none;
    border: none;

    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export const UsersLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
`;

export const UserContainer = styled.div`
  width: fit-content;

  :hover p {
    text-decoration: underline;
  }
`;
