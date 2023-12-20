import { IoTrendingUpOutline } from "react-icons/io5";

import { CardComment } from "@/components/CardComment";
import { TrendingBooks } from "@/components/TrendingBooks";
import { 
  Container, 
  ContainerHeader, 
  ContainerTrend, 
  ContentBook, 
  TextHeader, 
  TextSubtitle 
} from "./styles";
import { DefaultLayout } from "@/layout/DefaultLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Book Wise</title>
      </Head>

      <DefaultLayout>
        <Container>
          <ContainerHeader>
            <TextHeader>
              <IoTrendingUpOutline 
                size={28} 
                color={'#50B2C0'}
                style={{ paddingRight: 10 }}
              />
              Início
            </TextHeader>
          </ContainerHeader>

          <ContentBook>
            <TextSubtitle>
              Avaliações mais recentes
            </TextSubtitle>

            <CardComment />
          </ContentBook>
        </Container>

        <ContainerTrend>
          <TrendingBooks />
        </ContainerTrend>
      </DefaultLayout>
    </>
  )
}
