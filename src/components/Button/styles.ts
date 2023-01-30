import styled from "styled-components";

export const StyledButton = styled.button`
  background: rgba(226, 23, 61, 1);
  color: var(--white);
  font-size: 1.125rem;
  line-height: 21px;

  border: none;
  border-radius: 4px;

  padding: 0.813rem 7.063rem;

  :hover {
    filter: brightness(0.9);
  }

  @media (max-width: 620px) {
    padding: 0.413rem 3.063rem;
  }
`;
