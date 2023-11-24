import {
  Box,
  Text,
  Button,
  Center,
  HStack,
  Stack,
  Image,
  Divider,
  Heading,
  Container,
  ListIcon,
  ListItem,
  List,
  Show,
  SlideFade
} from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Home() {

  function scrollTo(e, id) {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <>
      <Box bg='blue.800'>
        <Container maxW='container.lg' minW='600px'>
          <HStack position='relative' spacing={10}>
            <Heading p={5} size='md'>BetterPopulis</Heading>
            <Button onClick={e => scrollTo(e, 'about')} colorScheme='blue' variant='link'>Sobre</Button>
            <Show breakpoint='(min-width: 750px)'><Button onClick={e => scrollTo(e, 'features')} colorScheme='blue' variant='link'>Features</Button></Show>
            <Button colorScheme='blue'variant='link'>Como instalar</Button>
            <Button style={{position: 'absolute', right: 50}} variant='outline'>Download</Button>
          </HStack>
        </Container>
      </Box>
      <Container color='gray.700' maxW='container.xl' minW='600px' h='calc(100vh - 120px)' minH='370px' maxH='850px'>
        <HStack justifyContent='center'>
          <Stack maxW='500px' p={3}>
            <SlideFade in={true} offsetY='100px'><Heading>
              A extensão que irá fazer você gostar do Populis
            </Heading></SlideFade>
            <SlideFade delay={0.2} in={true} offsetY='100px'><Text style={{margin: '20px 0'}}>
              Dificuldade para gerenciar a sua marcação de ponto? Sente falta de notificações importantes? Não consegue acompanhar seu progresso nos treinamentos? Seus problemas acabaram, a solução está aqui.
            </Text></SlideFade>
            <SlideFade delay={0.5} in={true} offsetY='100px'><Button w='100%' onClick={e => scrollTo(e, 'about')} colorScheme='blue'>Conheça o BetterPopulis</Button></SlideFade>
            <SlideFade delay={0.7} in={true} offsetY='100px'><Button w='100%' colorScheme='blue' variant='outline'>Download</Button></SlideFade>
          </Stack>
          <SlideFade delay={1} in={true} offsetY='80px'><Image src='./assets/banner.png' w='40vw'/></SlideFade>
        </HStack>
      </Container>
      <Box bg='blue.500'>
        <Center>
          <Heading id='about' p={5} size='md'>Conheça o poder do BetterPopulis</Heading>
        </Center>
      </Box>
      <Container color='gray.700' maxW='container.lg' minW='600px'>
        <HStack justifyContent='center'>
          <Image src='./assets/central_aprendizado.png' w='40vw' maxW='600px'/>
          <Stack maxW='500px' p={3}>
            <Heading>
              Central de Aprendizado
            </Heading>
            <Text style={{margin: '20px 0'}}>
              Acompanhe seu progresso nos treinamentos diretamente pelo Populis. A feature Central de Aprendizado adiciona um novo painel ao Populis que permite ver as horas de treinamento realizadas e restantes, acessar as plataformas de aprendizado e ver comparativos.
            </Text>
          </Stack>
        </HStack>
        <Divider/>
        <HStack justifyContent='center'>
          <Stack maxW='500px' p={3}>
            <Heading>
              Controle de Ponto
            </Heading>
            <Text style={{margin: '20px 0'}}>
              Com a extensão BetterPopulis, você verá informações úteis para auxiliar no seu controle de marcações diretamente na interface do Populis. Saiba exatamente quanto tempo já trabalhou, o período restante, a hora esperada para a próxima marcação, e muito mais. É o fim das solicitações de reajuste!
            </Text>
          </Stack>
          <Image src='./assets/controle_ponto.png' w='40vw' maxW='600px'/>
        </HStack>
        <Divider/>
        <HStack justifyContent='center'>
          <Image src='./assets/notificacao.png' w='40vw' maxW='600px'/>
          <Stack maxW='500px' p={3}>
            <Heading>
              Notificações
            </Heading>
            <Text style={{margin: '20px 0'}}>
              Receba notificações diretamente no seu computador sobre informações úteis. Seja notificado sobre a proximidade do horário de registro de saída, alertas de overtime, instabilidades no Populis, entre outras.  
            </Text>
          </Stack>
        </HStack>
      </Container>
      <Box bg='blue.500' align='center' pb={8}>
        <Stack align='center'>
          <Heading p={5} size='md'>E muito mais...</Heading>
          <Text>Diga adeus ao TAC com a confirmação de marcação:</Text>
          <Image borderRadius={20} src='./assets/tac_modal.png' w='590px'/>
          <Text style={{marginTop: 30}}>Controle tudo como quiser:</Text>
          <Image borderRadius={20} src='./assets/better_populis.png' w='590px'/>
        </Stack>
      </Box>
      <Container id='features' color='gray.700' maxW='container.sm' minW='600px' align='center' p={10}>
        <Heading size='lg'>Seja mais eficiente. Use BetterPopulis.</Heading>
        <List spacing={3} align='center' style={{paddingTop: 30}}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='blue.500' />
            Não gaste tempo se preocupando com marcações de ponto
          </ListItem>
          <Divider/>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='blue.500' />
            Mantenha o controle das suas horas de treinamento
          </ListItem>
          <Divider/>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='blue.500' />
            Receba notificações importantes
          </ListItem>
          <Divider/>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='blue.500' />
            Evite infrações TAC
          </ListItem>
        </List>
      </Container>
      <HStack bg='blue.500' justifyContent='center' padding={5} minW='600px'>
          <Image src='https://media.licdn.com/dms/image/C4D0BAQHEZLpOuy8yNg/company-logo_200_200/0/1676578444839/populis_recursos_humanos_logo?e=2147483647&v=beta&t=w-ZGVJpGsvBvrh4Wkb88Iu_miX-h5wer1VrdmCHS--M' h='25vw' maxH='70px' borderRadius={'50%'}/>
          <Image src='./assets/logo.png' h='25vw' maxH='70px' borderRadius={'50%'}/>
          <Image src='./assets/better_populis_logo.png' h='25vw' maxH='70px' borderRadius={'25px'}/>
      </HStack>
      <HStack bg='blue.800' justifyContent='center' padding={3} minW='600px'>
        <Text fontSize='sm' color='gray.200'>Equipe Dose Dupla | Skills Challenge | Desafio #2 | ITDP Development Committee</Text>
      </HStack>
    </>
  )
}
