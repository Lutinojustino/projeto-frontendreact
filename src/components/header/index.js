import React from "react";
import Car from "./car";
import { HeaderStyled } from "./style";

export default function Header(props) {
  return (
    <>
      <HeaderStyled>
        <h1>Projeto React</h1>
        <Car irPara={props.irPara} />
      </HeaderStyled>
    </>
  );
}
