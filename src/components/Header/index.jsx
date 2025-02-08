import { Container } from "./styled";
import { LogoImg } from "./styled";
import { Menu } from "./styled";

function Header() {
  return (
    <Container>
      <LogoImg>
        <img src="/logo-minecraft.png" alt="logo-minecraft" />
      </LogoImg>
      <Menu>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Servidores</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
export default Header;
