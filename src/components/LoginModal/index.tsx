import Image from "next/image"
import { ReactNode } from "react";

import logoGoogle from "../../../public/logos_google-icon.svg";
import logoGitHub from "../../../public/akar-icons_github-fill.svg";
import { 
  CardLogin, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogRoot, 
  DialogTitle, 
  DialogTrigger 
} from "./styles";

interface LoginModalProps {
  children: ReactNode | ReactNode[]
}

export function LoginModal({ children }: LoginModalProps){
  return (
    <DialogRoot>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <DialogTitle>
            Faça login para deixar sua avaliação
          </DialogTitle>

          <CardLogin>
            <Image alt="Google" src={logoGoogle}/>
            Entrar com Google
          </CardLogin>
          <CardLogin>
            <Image alt="GitHub" src={logoGitHub}/>
            Entrar com GitHub
          </CardLogin>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}