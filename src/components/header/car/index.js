import React from "react";
import carShop from "./img/Instasize Background Remover.png";
import { ImgStyled, ButtonCar } from "./style";

export default function Car(props) {
  return (
    <ButtonCar onClick={(tela) => props.irPara(2)}>
      <ImgStyled src={carShop} alt="" />
    </ButtonCar>
  );
}
