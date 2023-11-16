import { Image } from '@chakra-ui/react'
import Link from "next/link";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react"

export default function Menu() {
  return(
    <>
      <Flex
        minH="90vh"
        w="100vw"
        justify="center"
        align="center"
      >
        <Box align="center" w='90%' maxW='350px'>
          <Image 
            w='90vw'
            src='./assets/page_not_found.svg' 
          />
          <Text 
            fontWeight='light'
            letterSpacing={1}
            fontSize='1.25rem'
            mt='50px'
          >
            PÁGINA NÃO ENCONTRADA {':('}
          </Text>
          <Text>
          Está perdido?{' '}
          <Link style={{color: 'black'}} href='/'>
            Voltar para a página inicial
          </Link>
        </Text>
        </Box>
      </Flex>
    </>
  )
}
