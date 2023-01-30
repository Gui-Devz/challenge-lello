import { ReactNode } from "react";
import { StyledButton } from "./styles";
interface IButtonProps {
  onClick: () => void;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
}

export const Button = ({
  onClick,
  children,
  type = "submit",
}: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
