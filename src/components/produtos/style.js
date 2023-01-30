import styled from "styled-components";

export const CardProduto = styled.section`
  display: flex;
  width: 15vw;
  height: 25vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px ;
  justify-content: center;

  img {
    align-self: center;
    height: 110px;
    width: 120px;
  }
  button {
    background: #000;
    color: #ffff;
    height: 25px;
    width: 80px;
  }
  button:hover {
    background: #ffff;
    color: #000;
  }
`;
