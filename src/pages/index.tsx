import Image from "next/image"

import backgroundImg from "../../public/Image.png"
import logoGoogle from "../../public/logos_google-icon.svg";
import logoGitHub from "../../public/akar-icons_github-fill.svg"
import logoRocket from "../../public/RocketLaunch.svg"
import logoBook from "../../public/mdi_book-heart-outline.svg"

import { 
  CardHome,
  HomeContainer, 
  ImageContainer, 
  MainSection, 
  SubTitleSection, 
  TextLogo
} from "./styles"


export default function Home() {
  return (
    <HomeContainer>
      <ImageContainer>
        <TextLogo>
          <Image alt="Logo" src={logoBook} width={28} height={28} />
          BookWise
        </TextLogo>
      </ImageContainer>

      <MainSection>
        Boas vindas!
        <SubTitleSection>
          Faça seu login ou acesse como visitante.
        </SubTitleSection>
        <CardHome>
          <Image alt="Google" src={logoGoogle}/>
          Entrar com Google
        </CardHome>
        <CardHome>
          <Image alt="GitHub" src={logoGitHub}/>
          Entrar com GitHub
        </CardHome>
        <CardHome>
          <Image alt="Rocket" src={logoRocket}/>
          Acessar como visitante
        </CardHome>
      </MainSection>
    </HomeContainer>
  )
}
