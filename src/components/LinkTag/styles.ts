import styled from "styled-components";

export const StyledButton = styled.a`
  background: rgba(226, 23, 61, 1);
  color: var(--white) !important;
  font-size: 1.125rem;
  line-height: 21px;

  border: none;
  border-radius: 4px;

  text-decoration: none;

  padding: 0.813rem 0;

  width: 100%;
  max-width: 306px;
  text-align: center;

  :hover {
    filter: brightness(0.9);
    color: #fff;
  }

  @media (max-width: 620px) {
    padding: 0.613rem 0;
  }
`;
