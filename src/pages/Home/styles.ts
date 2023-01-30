import styled from "styled-components";

import welcomePerson from "../../assets/image-1.png";

export const Container = styled.div`
  max-width: 1170px;
`;

export const UpperContent = styled.div`
  background: var(--ice);
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;

  h1 {
    font-size: 2.25rem;
    font-weight: bold;
    color: var(--cyan);
    margin-bottom: 25px;
  }
`;

export const List = styled.div`
  margin-top: 2rem;
  font-size: 1.125rem;
  p {
    position: relative;
    margin-bottom: 9px !important;
    padding-left: 1rem;

    :before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 8px;
      height: 8px;
      background: var(--red);

      border-radius: 50%;
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 525px;
  background-image: url(${welcomePerson});

  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    height: auto;
    background: none;
  }
`;

export const MainContent = styled.main`
  color: var(--cyan);
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-bottom: 5rem !important;

  h2 {
    font-size: 1.625rem;
    font-weight: bold;

    margin-top: 40px;
    margin-bottom: 51px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-right: 1rem;
    font-weight: bold;
    color: var(--blue);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--ice);
  }

  p {
    display: inline-flex;
    align-items: center;
    color: var(--blue);
    padding-top: 1.2rem;
  }
`;

export const Text = styled.main`
  color: var(--medium-gray-second);
  font-size: 1.125rem;
  margin-top: 0.5rem;
  margin-bottom: 67px;
`;

export const ButtonContainer = styled.div`
  button {
    height: 48px;
    width: 100%;
    max-width: 306px;
    padding: 0 !important;
  }
`;

export const MidContent = styled.div`
  padding-bottom: 5rem !important;
  background: var(--bege);
  h2 {
    font-size: 1.625rem;
    font-weight: bold;
    line-height: 1.875rem;
    color: var(--cyan);
  }

  h4 {
    color: var(--blue);
  }

  img {
    width: 100%;
    max-width: 460px;
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: var(--ice);
  border-radius: 50%;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const EndContent = styled.div`
  padding-bottom: 5rem !important;

  h2 {
    font-size: 1.625rem;
    font-weight: bold;
    line-height: 1.875rem;
    color: var(--cyan);
  }
`;
