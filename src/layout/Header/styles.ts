import styled, { css } from "styled-components";

interface IHeaderTagProps {
  config: string;
}

export const HeaderTag = styled.header<IHeaderTagProps>`
  background: rgba(235, 246, 250, 1);
  width: 100%;
  position: fixed;
  top: 0;

  @media (max-width: 1100px) {
    position: static;
  }
  transition: background 250ms ease-in;

  ${(props) =>
    (props.config === "variant" || props.config === "showButton") &&
    css`
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      background: rgba(235, 246, 250, 0.3);
      z-index: 10000;
    `}
`;

export const Container = styled.div`
  max-width: 1170px;

  ul {
    li {
      font-weight: 400;
      font-size: 1.125rem;
      color: var(--cyan);
      width: fit-content;
    }

    a {
      font-weight: bold;
    }
    a:hover {
      color: var(--cyan);
    }

    li:not(.first) {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0%;
        height: 1.5px;
        transition: all 250ms ease-in;

        background: var(--cyan);
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const LinkContainer = styled.li`
  animation: show 0.25s ease-in-out forwards;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
