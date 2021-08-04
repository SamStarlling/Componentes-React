//Lembrando que precisamos importar o React da dependência react para que ele entenda que este é um componente que será exibido na tela.
import React from 'react';
import './style.css';

//Estamos criando uma função JavaScript com o nome do próprio componente. Dessa vez já estamos exportando esse componente direto no cabeçalho da função.
export default function Footer() {
  
  //Utilizamos a palavra-chave return e colocaremos entre parênteses o que será exibido na tela para o usuário.
  return(
    <footer>Desenvolvido com React</footer>
  );
}