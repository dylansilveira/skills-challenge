import Link from "next/link";
import {
  Box,
  Text,
  Button,
  Center,
  HStack,
  Stack,
  Image,
  useToast,
  Heading
} from "@chakra-ui/react";
import { useReducer, useState } from 'react';
import Piece from "../components/piece";
import ReactCardFlip from 'react-card-flip';

export default function Home() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [pieces, setPieces] = useState([0, 1, 1, 1, 0, 1, 0, 0, 1, 1]);
  const [isSolving, setSolving] = useState(false);
  const toast = useToast();

  function resetPieces() {
    setPieces([1, 0, 0, 1, 0, 1, 0, 0, 1, 0]);
  }

  async function handlePieceChange(index, newPieces) {
    newPieces[index] = -1;
    setPieces(newPieces);
    forceUpdate();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(200);

    if (index == 0) newPieces[9] = newPieces[9] == -1 ? -1 : newPieces[9] == 0 ? 1 : 0;
    else newPieces[index-1] = newPieces[index-1] == -1 ? -1 : newPieces[index-1] == 0 ? 1 : 0;
    
    if (index == 9) newPieces[0] = newPieces[0] == -1 ? -1 : newPieces[0] == 0 ? 1 : 0;
    else newPieces[index+1] = newPieces[index+1] == -1 ? -1 : newPieces[index+1] == 0 ? 1 : 0;

    return newPieces;
  }

  function turnPiece(index) {
    let newPieces = [...pieces];
    newPieces[index] = newPieces[index] == 0 ? 1 : 0;
    setPieces(newPieces);
  }

  async function resolvePuzzle() {
    function viraVira(arr, seq) {
      if (arr.every(x => x == -1)) return seq;
      if (!arr.includes(0)) return [];
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] == 0) {
              seq.push(i+1);
              arr = turn([...arr], i);
              let res = viraVira(arr, seq);
              if (res.length) return res;
              seq.pop();
          }
      }
      return [];
    }
    function turn(arr, pos) {
      var leftNeighbourIndex = -1;
      var rightNeighbourIndex = -1;
      arr[pos] = -1;
      if (pos == 0) {
          leftNeighbourIndex = arr.length - 1;
          rightNeighbourIndex = pos + 1;
      } else if (pos == arr.length - 1) {
          leftNeighbourIndex = pos - 1;
          rightNeighbourIndex = 0;
      } else {
          leftNeighbourIndex = pos - 1;
          rightNeighbourIndex = pos + 1;
      }
      if (arr[leftNeighbourIndex] != -1) arr[leftNeighbourIndex] = arr[leftNeighbourIndex] == 0 ? 1 : 0;
      if (arr[rightNeighbourIndex] != -1) arr[rightNeighbourIndex] = arr[rightNeighbourIndex] == 0 ? 1 : 0;
      return arr;
    }
    
    let res = viraVira(pieces, []);
    if (!res.length) {
      toast.closeAll();
      toast({
        title: 'Sem solução!',
        description: "Não é possível resolver para esta combinação inicial de peças.",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    setSolving(true);
    const solvingPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 11200);
    })
    toast.closeAll();
    toast.promise(solvingPromise, {
      success: { title: 'Desafio solucionado!', description: `A sequência encontrada solucionou corretamente o desafio.`, position: 'top' },
      error: { title: 'Erro ao resolver', description: 'Por favor, tente novamente', position: 'top' },
      loading: { title: 'Solucionando desafio...', description: `Sequência: ${res.join(' → ')}`, position: 'top' },
    })

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    let newPieces = [...pieces];

    for (let i = 0; i < res.length; i++) {
      newPieces = await handlePieceChange(res[i]-1, newPieces);
      forceUpdate();
      await sleep(1000);
    }
    
    await sleep(4000);
    resetPieces();
    setSolving(false);
  }

  return (
    <>
      <Center h='100vh' minH='550px' minW='600px'>
        <Stack>
          <HStack spacing={10}>
            <ReactCardFlip isFlipped={pieces[0] == 1} flipDirection="horizontal">
              <Piece shouldhide={pieces[0] == -1} value={0} onClick={_ => turnPiece(0)}>1</Piece>
              <Piece shouldhide={pieces[0] == -1} value={1} onClick={_ => turnPiece(0)}>1</Piece>
            </ReactCardFlip>
            <Box style={{marginTop: '-120px'}}>
              <ReactCardFlip isFlipped={pieces[1] == 1} flipDirection="horizontal">
                <Piece shouldhide={pieces[1] == -1} value={0} onClick={_ => turnPiece(1)}>2</Piece>
                <Piece shouldhide={pieces[1] == -1} value={1} onClick={_ => turnPiece(1)}>2</Piece>
              </ReactCardFlip>
            </Box>
            <Box style={{marginTop: '-120px'}}>
              <ReactCardFlip isFlipped={pieces[2] == 1} flipDirection="horizontal">
                <Piece shouldhide={pieces[2] == -1} value={0} onClick={_ => turnPiece(2)}>3</Piece>
                <Piece shouldhide={pieces[2] == -1} value={1} onClick={_ => turnPiece(2)}>3</Piece>
              </ReactCardFlip>
            </Box>
            <ReactCardFlip isFlipped={pieces[3] == 1} flipDirection="horizontal">
              <Piece shouldhide={pieces[3] == -1} value={0} onClick={_ => turnPiece(3)}>4</Piece>
              <Piece shouldhide={pieces[3] == -1} value={1} onClick={_ => turnPiece(3)}>4</Piece>
            </ReactCardFlip>
          </HStack>
          <HStack justifyContent='center' position='relative' minH='150px'>
            <Box position='absolute' right='-60px'>
              <ReactCardFlip isFlipped={pieces[4] == 1} flipDirection="horizontal">
                <Piece shouldhide={pieces[4] == -1} value={0} onClick={_ => turnPiece(4)}>5</Piece>
                <Piece shouldhide={pieces[4] == -1} value={1} onClick={_ => turnPiece(4)}>5</Piece>
              </ReactCardFlip>
            </Box>
            <Stack maxW='300px' align={'center'} spacing={5}>
              <Text as='b'>Clique em uma peça para virá-la.</Text>
              <Text align={'center'}>Após escolher a sequencia inicial, clique em resolver para ver a solução.</Text>
              <Button colorScheme="green" onClick={resolvePuzzle} disabled={isSolving}>Resolver</Button>
            </Stack>
            <Box position='absolute' left='-60px'>
              <ReactCardFlip isFlipped={pieces[9] == 1} flipDirection="horizontal">
                <Piece shouldhide={pieces[9] == -1} value={0} onClick={_ => turnPiece(9)}>10</Piece>
                <Piece shouldhide={pieces[9] == -1} value={1} onClick={_ => turnPiece(9)}>10</Piece>
              </ReactCardFlip>
            </Box>
          </HStack>
          <HStack spacing={10}>
            <ReactCardFlip isFlipped={pieces[8] == 1} flipDirection="horizontal">
              <Piece shouldhide={pieces[8] == -1} value={0} onClick={_ => turnPiece(8)}>9</Piece>
              <Piece shouldhide={pieces[8] == -1} value={1} onClick={_ => turnPiece(8)}>9</Piece>
            </ReactCardFlip>
            <Box style={{marginBottom: '-120px'}}>
              <ReactCardFlip isFlipped={pieces[7] == 1} flipDirection="horizontal">
                <Piece shouldhide={pieces[7] == -1} value={0} onClick={_ => turnPiece(7)}>8</Piece>
                <Piece shouldhide={pieces[7] == -1} value={1} onClick={_ => turnPiece(7)}>8</Piece>
              </ReactCardFlip>
            </Box>
            <Box style={{marginBottom: '-120px'}}>
              <ReactCardFlip isFlipped={pieces[6] == 1} flipDirection="horizontal">
                <Piece shouldhide={pieces[6] == -1} value={0} onClick={_ => turnPiece(6)}>7</Piece>
                <Piece shouldhide={pieces[6] == -1} value={1} onClick={_ => turnPiece(6)}>7</Piece>
              </ReactCardFlip>
            </Box>
            <ReactCardFlip isFlipped={pieces[5] == 1} flipDirection="horizontal">
              <Piece shouldhide={pieces[5] == -1} value={0} onClick={_ => turnPiece(5)}>6</Piece>
              <Piece shouldhide={pieces[5] == -1} value={1} onClick={_ => turnPiece(5)}>6</Piece>
            </ReactCardFlip>
          </HStack>
        </Stack>
      </Center>
      <HStack bg='#FFFBEA' justifyContent='center' padding={5} minW='600px'>
          <Image src='./assets/logo.png' h='25vw' maxH='300px' borderRadius={'50%'}/>
          <Stack color='gray.700' maxW='400px'>
            <Heading size='md'>Como funciona?</Heading>
            <Text>{'Para que seja possível resolver o problema, o círculo inicial (sendo n >= 3) precisa conter um número par de peças brancas.'}</Text>
            <Text>{'Isso ocorre, logicamente, devido a propriedade de inversão do puzzle e sua redução progressiva. Uma configuração ímpar de peças brancas resulta em uma situação onde você não pode mais fazer movimentos válidos antes de todas as peças serem removidas.'}</Text>
          </Stack>
      </HStack>
      <HStack bg='#F3ECCE' justifyContent='center' padding={3} minW='600px'>
        <Text fontSize='sm' color='gray.800'>Equipe Dose Dupla | Skills Challenge | Desafio #1 | ITDP Development Committee</Text>
      </HStack>
    </>
  )
}
