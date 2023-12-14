import Image from "next/image";
import { 
  IoTrendingUpOutline, 
  IoNavigateOutline, 
  IoLogInOutline
} from "react-icons/io5";

import logoBook1x from "../../../public/sidebarLogo1x.png"
import { 
  Container, 
  ExplorerButton, 
  InitButton, 
  LoginButton, 
  Logo 
} from "./styles";

export function Sidebar(){
  return (
    <Container>
      <Logo>
        <Image 
          alt="logo" 
          src={logoBook1x}
        />
      </Logo>

      <InitButton>
        <IoTrendingUpOutline size={24}/>
        Início
      </InitButton>
      
      <ExplorerButton>
        <IoNavigateOutline size={24}/>
        Explorar
      </ExplorerButton>

      <LoginButton>
        Fazer Login
        <IoLogInOutline size={24}/>
      </LoginButton>
    </Container>
  )
}
