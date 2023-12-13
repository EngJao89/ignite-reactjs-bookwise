import Image from "next/image"

import backgroundImg from "../../../public/hero.png";
import logoGoogle from "../../../public/logos_google-icon.svg";
import logoGitHub from "../../../public/akar-icons_github-fill.svg";
import logoRocket from "../../../public/RocketLaunch.svg";

import { 
  CardHome,
  LoginContainer,  
  MainSection, 
  SubTitleSection
} from "./styles"

export default function Login(){
  return (
    <LoginContainer>
      <Image alt="Logo" src={backgroundImg}/>

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
    </LoginContainer>
  )
}