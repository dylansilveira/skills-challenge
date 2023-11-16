import {
  Heading,
  Circle,
} from "@chakra-ui/react";

export default function Piece(props) {

  if (props.shouldhide) return (
    <Circle
      size='90px'
      opacity={0.15}
      bg='black'
    ></Circle>
  )

  return props.value == 1 ?
    (
      <Circle
        {...props} 
        size='90px' 
        bg='gray.600'
        color='gray'
        boxShadow='2xl'
        border='4px dashed gray'
        _hover={{transform: 'scale(1.15)', cursor: 'pointer', boxShadow: 'md' }}
      >
        <Heading>
          {props.children}
        </Heading>
      </Circle>
    ) : (
      <Circle
        {...props} 
        size='90px' 
        bg='white'
        color='#A0AEC0'
        boxShadow='2xl'
        border='4px solid #A0AEC0'
        _hover={{transform: 'scale(1.15)', cursor: 'pointer', boxShadow: 'md' }}
      >
        <Heading>
          {props.children}
        </Heading>
      </Circle>
    )
}