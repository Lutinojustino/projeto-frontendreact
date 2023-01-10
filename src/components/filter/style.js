
import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 75vh;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    align-self: center;
    color: hsl(237, 100%, 75%);
  }

  label > input {
    border-radius: 25px;
    height: 30px;
  }

  label > span {
    display: flex;
    align-self: center;
  }

  button {
    background: hsl(232, 85%, 34%);
    border-radius: 25px;
    height: 35px;
    width: 150px;
    align-self: center;
    color: hsl(167, 75%, 59%);
  }
`;
