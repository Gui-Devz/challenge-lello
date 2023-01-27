import { Logo } from "../../components/Logo";
import { HeaderTag } from "./styles";

export const Header = () => {
  return (
    <HeaderTag>
      <ul>
        <li>
          <Logo />
        </li>
        <li></li>
        <li></li>
      </ul>
    </HeaderTag>
  );
};
