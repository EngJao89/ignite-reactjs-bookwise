'use client';

import Image from "next/image";
import { IoNavigateOutline, IoSearchOutline } from "react-icons/io5";

import { Sidebar } from "@/components/Sidebar";
import { Categories } from "@/components/Categories";
import {
  ContentTitle, 
  ContentTag, 
  InputSearch, 
  TextHeader, 
  TextSearch,
  Container
} from "./styles";

export default function Explore(){

  return (
  <Container>
    <Sidebar/>
    <ContentTitle>
      <IoNavigateOutline size={32} color="#50B2C0"/>
      <TextHeader>
        Explorar
      </TextHeader>
    </ContentTitle>

    <InputSearch>
      <TextSearch>
        Buscar livro ou autor
        </TextSearch>
      <IoSearchOutline size={20} color="#8D95AF"/>
    </InputSearch>


    <ContentTag>
        <Categories />
      </ContentTag>
    </Container>
  )
}