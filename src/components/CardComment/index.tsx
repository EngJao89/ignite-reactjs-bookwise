import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Avatar from "../../../public/Avatar.png";
import Book1 from "../../../public/books/Book-Douglas-Adams.png"
import { 
  AuthorName, 
  BookName, 
  CardContainer, 
  CardHeader, 
  Content, 
  RateContainer, 
  TextComment, 
  TextDate, 
  TextName 
} from "./styles";

export function CardComment() {
  return(
    <>
      <CardContainer>
        <CardHeader>
          <Image 
            alt="Avatar" 
            src={Avatar} 
          />
          <TextName>
            Brandon Botosh
            <TextDate>Hoje</TextDate>
          </TextName>

          <RateContainer>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </RateContainer>
        </CardHeader>

        <Content>
          <Image alt="Book1" src={Book1}/>
          <BookName>
            O guia do mochileiro das galáxias
            <AuthorName>Douglas Adams</AuthorName>

            <TextComment>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.<br/> 
              Penatibus id vestibulum imperdiet a at imperdiet lectus leo.<br/> 
              Sit porta eget nec vitae sit vulputate eget
            </TextComment>
          </BookName>
        </Content>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <Image 
            alt="Avatar" 
            src={Avatar} 
          />
          <TextName>
            Brandon Botosh
            <TextDate>Hoje</TextDate>
          </TextName>
  
          <RateContainer>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </RateContainer>
        </CardHeader>
  
        <Content>
          <Image alt="Book1" src={Book1}/>
          <BookName>
            O guia do mochileiro das galáxias
            <AuthorName>Douglas Adams</AuthorName>
  
            <TextComment>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.<br/> 
              Penatibus id vestibulum imperdiet a at imperdiet lectus leo.<br/> 
              Sit porta eget nec vitae sit vulputate eget
            </TextComment>
          </BookName>
        </Content>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <Image 
            alt="Avatar" 
            src={Avatar} 
          />
          <TextName>
            Brandon Botosh
            <TextDate>Hoje</TextDate>
          </TextName>
  
          <RateContainer>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </RateContainer>
        </CardHeader>
  
        <Content>
          <Image alt="Book1" src={Book1}/>
          <BookName>
            O guia do mochileiro das galáxias
            <AuthorName>Douglas Adams</AuthorName>
  
            <TextComment>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.<br/> 
              Penatibus id vestibulum imperdiet a at imperdiet lectus leo.<br/> 
              Sit porta eget nec vitae sit vulputate eget
            </TextComment>
          </BookName>
        </Content>
      </CardContainer>
    </>
  )
}