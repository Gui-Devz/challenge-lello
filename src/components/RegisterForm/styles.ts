import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  padding: 35px 32px 40px 32px;
  border-radius: 4px;
  width: 100%;
  max-width: 370px;

  h3 {
    text-align: left;
    margin-bottom: 43px;
    font-size: 22px;
    line-height: 25px;
    color: var(--cyan);
  }

  div {
    text-align: left;
    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid var(--light-gray);
      padding-bottom: 12px;
      color: var(--medium-gray);
      line-height: 19px;

      :focus-visible {
        outline: none;
      }
    }
  }

  div + div {
    margin-top: 2.1rem;
  }

  button {
    margin-top: 18px;
  }
`;
