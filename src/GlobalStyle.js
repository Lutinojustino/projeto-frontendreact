import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Rest = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`;

export const MainStyle = styled.main`
  display: grid;
  grid-template-columns: 15vw 95vw;

  .Card {
    display: flex;
    width: 83vw;
    min-height: 80vh;
    flex-wrap: wrap;
  }

  button {
    height: 50px;
    width: 150px;
    align-self: center;
  }
`;

export const MainStyleCar = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 80vh;

  .valTotal {
    display: flex;
    align-self: center;
  }

  button {
    display: flex;
    width: 200px;
    height: 25px;
    align-content: center;
    justify-content: center;
    background: #000;
    color: #ffff;
  }

  button:hover {
    background: #ffff;
    color: #000;
  }
`;
