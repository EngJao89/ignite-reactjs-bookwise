import { IoTrendingUpOutline } from "react-icons/io5";

import { Sidebar } from "@/components/Sidebar";
import { CardComment } from "@/components/CardComment";
import { Container, ContainerHeader, TextHeader, TextSubtitle } from "./styles";

export default function Home() {
  return (
      <Container>
        <Sidebar />

        <ContainerHeader>
          <TextHeader>
            <IoTrendingUpOutline 
              size={28} 
              color={'#50B2C0'}
              style={{ paddingRight: 10 }}
            />
            Início
          </TextHeader>

          <TextSubtitle>
            Avaliações mais recentes
          </TextSubtitle>

          <CardComment />
        </ContainerHeader>


      </Container>
  )
}
