import { useState } from "react";
import { phoneMask } from "../../utils/masks";
import { Button } from "../Button";
import { Container } from "./styles";

export const RegisterForm = () => {
  const [tel, setTel] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="w-100 mt-4 mt-lg-0">
      <h3>Faça seu cadastro!</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <input
            name="name"
            placeholder="Nome"
            className="p"
            type="text"
            minLength={3}
          />
        </div>
        <div>
          <input name="email" type="email" minLength={3} placeholder="E-mail" />
        </div>
        <div>
          <input
            name="tel"
            type="text"
            placeholder="Celular"
            minLength={11}
            value={tel}
            onChange={(e) => {
              const onlyNumbers = e.target?.value?.replace(/\D/gi, "");

              if (onlyNumbers?.length > 11) {
                return;
              }
              setTel(phoneMask(onlyNumbers));
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button onClick={() => {}}>Cadastrar</Button>
        </div>
      </form>
    </Container>
  );
};
