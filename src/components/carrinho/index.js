import React from "react";
import { CarStyle } from "./style";

export default function Carrinho({
  name,
  valor,
  imagem,
  quantidade,
  removerCarroDeCompras,
  item,
}) {
  return (
    <>
      <CarStyle>
        <img src={imagem} />
        <h2>{name}</h2>
        <p>{valor}</p>
        <span>X {quantidade}</span>
        <button onClick={(produto) => removerCarroDeCompras(item)}></button>
      </CarStyle>
    </>
  );
}
