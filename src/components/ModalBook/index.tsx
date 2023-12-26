import { ReactNode, useState } from "react"
import Image from "next/image"
import { DialogContentProps } from "@radix-ui/react-dialog"
import { 
  IoBookOutline, 
  IoBookmarkOutline, 
  IoStar, 
  IoStarOutline 
} from "react-icons/io5";

import { 
  BookAbout,
  BookContent, 
  BookInfo, 
  BookSection, 
  BookStats, 
  BookSubtitle, 
  BookTitle, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogRoot, 
  DialogTrigger, 
  RateContainer,
  StatusContent,
  StatusSubtitles
} from "./styles"

import bookImage from "../../../public/book-list/14-habitos-de-desenvolvedores-altamente-produtivos.svg"


interface Book {
  name: string
  author: string
  coverURL: string
  totalPages: number
  categories: string[]
  ratings: {
    id: string
    rate: number
    description: string
    createdAt: string
    user: {
      id: string
      avatarURL: string
      name: string
    }
  }[]
}

interface BookDrawerContentProps extends DialogContentProps {
  bookId: string
  children: ReactNode | ReactNode[]
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export function ModalBook({
  bookId,
  children,
  defaultOpen,
  onOpen,
  onClose,
}: BookDrawerContentProps){
  const [isOpen, setIsOpen] = useState(defaultOpen)

  function handleOpenChange(open: boolean) {
    setIsOpen(open)

    if (typeof onClose !== 'undefined' && !open) {
      onClose()
    }

    if (typeof onOpen !== 'undefined' && open) {
      onOpen()
    }
  }
  return(
    <DialogRoot open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogPortal>
          <DialogOverlay />

          <DialogContent>
            <BookSection>
              <BookContent>
                <Image 
                  alt="Book Image" 
                  src={bookImage}
                  width={172}
                  height={242}
                />
                <BookInfo>
                  <BookTitle>
                    14 Hábitos de Desenvolvedores Altamente Produtivos
                  </BookTitle>
                  <BookSubtitle>Zeno Rocha</BookSubtitle>

                  <RateContainer>
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStarOutline size={16} color={'#8381D9'} />
                  </RateContainer>
                  <BookSubtitle>3 avaliações</BookSubtitle>
                </BookInfo>
              </BookContent>

              <BookAbout>
                <StatusContent>
                  <BookStats>
                    <IoBookmarkOutline size={24} color="#50B2C0"/>
                    Categoria
                    <StatusSubtitles>Computação, educação</StatusSubtitles>
                  </BookStats>
                </StatusContent>

                <StatusContent>
                  <BookStats>
                    <IoBookOutline size={24} color="#50B2C0"/>
                      Páginas
                    <StatusSubtitles>160</StatusSubtitles>
                  </BookStats>
                </StatusContent>
              </BookAbout>
            </BookSection>
          </DialogContent>
        </DialogPortal>
    </DialogRoot>
  )
}
