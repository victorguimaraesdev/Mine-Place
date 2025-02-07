import { Container } from "./Styles";
import { Text } from "./Styles";
import { ImgBanner } from "./Styles";

const Banner = () => {
  return (
    <Container>
      <ImgBanner>
        <img src="/Home-img.png" alt="Home img" />
      </ImgBanner>
      <Text>
        <h1>Seja bem vindo ao Mine-Place!</h1>
        <p>
          O Mine-Place é um projeto inspirado no universo Minecraft,
          desenvolvido com React. js e Node.js, para proporcionar uma
          experiência interativa aos jogadores e fãs do jogo.
        </p>
        <button>Saiba mais</button>
      </Text>
    </Container>
  );
};
export default Banner;
