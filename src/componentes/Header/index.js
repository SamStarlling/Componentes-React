//Sempre que formos criar um novo componente, ou seja, um elemento que vamos colocar na tela, precisamos importar o componente React da dependência react.
import React from 'react'; //React vai entender que esse código é um componente que será renderizado na tela.
import './style.css';


//criamos uma função JavaScript com o nome do próprio componente - novamente, um comportamento padrão na codificação de componentes React.
function Header() {
  //Todo componente precisa retornar o que será renderizado na tela
  return (
    <header>Trabalhando com componentes</header>
  );
}

//A palavra-chave default indica que este será o componente principal deste arquivo
export default Header;