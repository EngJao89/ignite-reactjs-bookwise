import { IoNavigateOutline, IoSearchOutline } from "react-icons/io5";
import { Sidebar } from "@/components/Sidebar";
import { Categories } from "@/components/Categories";
import { 
  Container, 
  ContentTag, 
  HeaderContent, 
  InputSearch, 
  TextHeader, 
  TextSearch 
} from "./styles";

export default function Explore(){
  return (
    <Container>
      <Sidebar/>

      <HeaderContent>
        <IoNavigateOutline size={32} color="#50B2C0"/>
        <TextHeader>
          Explorar
        </TextHeader>
        <InputSearch>
          <TextSearch>
            Buscar livro ou autor
          </TextSearch>
          <IoSearchOutline size={20} color="#8D95AF"/>
        </InputSearch>
      </HeaderContent>

      <ContentTag>
        <Categories />
      </ContentTag>
    </Container>
  )
}