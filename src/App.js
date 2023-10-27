import "./styles.css";
import { useState } from "react";
import styled from "styled-components";

const Botao = styled.button`
  background-color: aqua;
  color: tomato;
  font-size: 40px;
  margin: 15px;
`;
const Numeros = styled.h1`
  font-size: 70px;
  margin: 50px;
  color: maroon;
`;

export default function App() {
  const [numero, setNumero] = useState(0);

  const adicionar = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };

  const diminuir = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };
  return (
    <>
      <Numeros>{numero}</Numeros>
      <Botao onClick={adicionar}>+1</Botao>
      <Botao onClick={diminuir}>-1</Botao>
    </>
  );
}
