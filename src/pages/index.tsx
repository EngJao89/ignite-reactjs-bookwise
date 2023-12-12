import Image from "next/image"
import backgroundImg from "../../public/Image.png"
import { 
  HomeContainer, 
  ImageContainer, 
  MainSection, 
  SubTitleSection 
} from "./styles"


export default function Home() {
  return (
    <HomeContainer>
      <ImageContainer>
        <Image alt="background" src={backgroundImg} />
      </ImageContainer>
      

      <MainSection>
        Boas vindas!
        <SubTitleSection>
          Faça seu login ou acesse como visitante.
        </SubTitleSection>
      </MainSection>
    </HomeContainer>
  )
}
