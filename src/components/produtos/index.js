import React from "react";
import { CardProduto } from "./style";

export default function Produtos({
  imagem,
  name,
  valor,
  item, 
  id,
  addNoCarro,
}) {
  return (
    <CardProduto>
      <img src={imagem} />
      <h2>{name}</h2>
      <p>{valor}</p>
      <button onClick={(produto) => addNoCarro(item)}>Carrinho</button>
    </CardProduto>
  );
}
