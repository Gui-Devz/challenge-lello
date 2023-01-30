import styled from "styled-components";

export const Accordion = styled.div`
  border: 1px solid #bebebe;
  padding: 30px 24px !important;
  margin-bottom: 24px;
  button {
    font-size: 1.375rem;
    line-height: 1.563rem;
    font-weight: 500;
    color: var(--medium-gray);
    text-align: left;

    svg {
      transition: all 0.2s ease-out;
    }

    :hover svg,
    :active svg {
      transform: scale(1.2);
      -moz-transition: scale(1.2);
    }
  }
`;

export const Collapse = styled.div`
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
