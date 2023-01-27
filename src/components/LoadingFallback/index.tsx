import { Container } from "./styles";

export const LoadingFallback = () => {
  return (
    <Container>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>carregando..</p>
    </Container>
  );
};
