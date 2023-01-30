import { useMemo } from "react";

import { RegisterForm } from "../../components/RegisterForm";
import { Header } from "../../layout/Header";
import {
  ButtonContainer,
  Container,
  EndContent,
  FormContainer,
  List,
  MainContent,
  MidContent,
  SvgContainer,
  Text,
  UpperContent,
} from "./styles";

import { ReactComponent as Journal } from "../../assets/document.svg";
import { ReactComponent as Balance } from "../../assets/balance.svg";
import { ReactComponent as Tel } from "../../assets/phone-call.svg";
import { ReactComponent as Web } from "../../assets/web-page.svg";
import { ReactComponent as Money } from "../../assets/money-bag.svg";
import people from "../../assets/image-2.png";
import { QA } from "../../components/QA";
import { LinkTag } from "../../components/LinkTag";

export const Home = () => {
  const QAContent = useMemo(() => {
    return [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        list: [
          "1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "3. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        list: [
          "1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "3. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        list: [
          "1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "3. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
    ];
  }, []);
  return (
    <>
      <Header />

      <UpperContent className=".container-fluid p-4">
        <Container className="row m-auto d-lg-flex align-items-center">
          <div className="col-lg-5 p-0">
            <h1>
              Lorem ipsum dolor sit <br className="d-none d-lg-block" />
              amet consectetur
            </h1>
            <p style={{ fontSize: "1.375rem" }}>
              Lorem ipsum dolor sit amet, consectetur{" "}
              <br className="d-none d-lg-block" />
              adipiscing elit, sed do eiusmod tempor
              <br className="d-none d-lg-block" /> incididunt ut labore et{" "}
              <strong>dolore magna</strong> aliqua. Ut
              <br className="d-none d-lg-block" /> enim ad minim veniam, quis
              nostrud.
            </p>
            <List className="d-flex flex-column gap-1">
              <p className="m-0">Duis aute irure dolor in reprehenderit</p>
              <p className="m-0">
                In voluptate velit esse cillum dolore eu fugiat nulla
              </p>
              <p className="m-0">
                Excepteur sint occaecat cupidatat non proident
              </p>
            </List>
          </div>
          <FormContainer
            id="form"
            className="col d-flex justify-content-center justify-content-lg-end align-items-center"
          >
            <RegisterForm />
          </FormContainer>
        </Container>
      </UpperContent>
      <MainContent className=".container-fluid p-4">
        <Container className="row m-auto">
          <h2 className="d-flex justify-content-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <div className="ps-2 row column">
            <div className="container-fluid col-lg-6 p-0">
              <div className="d-flex align-items-start">
                <span className="col-1">1</span>
                <div className="col">
                  <p className="fw-bold m-0">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <span className="col-1">2</span>
                <div className="col">
                  <p className="fw-bold m-0">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </div>
              </div>
            </div>
            <div className="container-fluid col-lg-6 p-0 column">
              <div className="d-flex align-items-start">
                <span className="col-1">3</span>
                <div className="col">
                  <p className="fw-bold m-0">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <span className="col-1">4</span>
                <div className="col">
                  <p className="fw-bold m-0">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <ButtonContainer className="d-flex justify-content-center">
            <LinkTag type="button" href={"#form"}>
              Quero me cadastrar
            </LinkTag>
          </ButtonContainer>
        </Container>
      </MainContent>
      <MidContent className=".container-fluid p-4">
        <Container className="row m-auto">
          <div className="d-flex justify-content-center mb-5 mt-5">
            <h2 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br className="d-none d-lg-block" /> sed do eiusmod tempor
              incididunt ut labore et dolore
            </h2>
          </div>
          <div className="container-fluid col-lg-7 p-0">
            <div>
              <div className="d-flex align-items-center pb-5">
                <SvgContainer className="col-1">
                  <Journal className="ps-1" />
                </SvgContainer>
                <div className="ms-4">
                  <h4 className="m-0 pb-2">Lorem ipsum dolor sit amet</h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-5">
                <SvgContainer className="col-1">
                  <Balance />
                </SvgContainer>
                <div className="ms-4">
                  <h4 className="m-0 pb-2">Lorem ipsum dolor sit amet</h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-5">
                <SvgContainer className="col-1">
                  <Tel />
                </SvgContainer>
                <div className="ms-4">
                  <h4 className="m-0 pb-2">Lorem ipsum dolor sit amet</h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-5">
                <SvgContainer className="col-1">
                  <Web />
                </SvgContainer>
                <div className="ms-4">
                  <h4 className="m-0 pb-2">Lorem ipsum dolor sit amet</h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-5">
                <SvgContainer className="col-1">
                  <Money />
                </SvgContainer>
                <div className="ms-4">
                  <h4 className="m-0 pb-2">Lorem ipsum dolor sit amet</h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-flex align-items-center">
            <img src={people} alt="people working" width="460px" />
          </div>
          <ButtonContainer className="d-flex justify-content-center">
            <LinkTag type="button" href={"#form"}>
              Quero me cadastrar
            </LinkTag>
          </ButtonContainer>
        </Container>
      </MidContent>
      <EndContent className=".container-fluid p-4">
        <Container className="row m-auto">
          <div className="d-flex justify-content-center mb-5 mt-5">
            <h2 className="text-center w-100">Perguntas Frequentes</h2>
          </div>
          {QAContent.map((content, index) => {
            return (
              <QA
                content={content.content}
                list={content.list}
                title={content.title}
                key={index}
              />
            );
          })}
        </Container>
      </EndContent>
    </>
  );
};
