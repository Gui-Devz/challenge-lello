import { ReactNode } from "react";
import { StyledButton } from "./styles";
interface IButtonProps {
  href: string;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
}

export const LinkTag = ({
  href,
  children,
  type,
  className = "submit",
}: IButtonProps) => {
  return (
    <StyledButton type={type} className={className} href={href}>
      {children}
    </StyledButton>
  );
};
