# Skills Challenge
Este repositório contém a implementação do algoritmo utilizado para resolver os desafios #1 e #2 propostos para o evento Skills Challenge do ITDP Development Committee. A pasta vira-vira é referente ao primeiro desafio, enquanto a pasta better-populis é referente ao segundo. Os arquivos na raiz do projeto representam o algoritmo desenvolvido também para o primeiro desafio, com a explicação a seguir.

### Algoritmo
O algoritmo é uma abordagem recursiva para resolver o problema do vira-vira. O algoritmo trabalha com uma sequência de 0s e 1s, onde 0s representam peças brancas e 1s peças cinzas. A operação de "virar" altera o valor de um elemento e seus vizinhos. O objetivo é encontrar uma sequência de operações que leve a todos os elementos da sequência a terem o valor -1 (representação para "removidos").

#### Explicação do algoritmo em pseudocódigo
    função viraVira(array, sequência):

      se já percorreu um caminho com o mesmo número de peças brancas e cinzas, retorne uma lista vazia
  
      se todoas peças foram removidas, retorne sequencia
  
      se não houver peças brancas, retorne uma lista vazia
  
      para cada peça branca:
          adicione a posição da peça na sequência
          marque a peça como removida do array
          vire as peçaças vizinhas da peça removida
          resultado = chame recursivamente viraVira com o novo array e sequência
          se resultado não for uma lista vazia, retorne resultado
          remova o último elemento de sequência
          armazene o caminho percorrido
  
      retorne uma lista vazia
