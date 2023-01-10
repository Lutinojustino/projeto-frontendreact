import React from "react";
import { Forms } from "./style";

export default function Filter({
  nome,
  setNome,
  valMin,
  setValMin,
  valMax,
  setValMax,
  ordenar,
  setOrdenar,
}) {
  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeValMin = (event) => {
    setValMin(event.target.value);
  };

  const onChangeValMax = (event) => {
    setValMax(event.target.value);
  };

  const onChangeOrdenar = (event) => {
    setOrdenar(event.target.value);
  };

  const onClickDados = () => {
    setNome("");
    setOrdenar("");
    setValMax("");
    setValMin("");
  };

  return (
    <>
      <Forms>
        <select onChange={(event) => onChangeOrdenar(event)}>
          <option value="">Ordenado</option>
          <option value="Menor-Maior">Valor Crescente</option>
          <option value="Maior-Menor">Valor Decrescente</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </select>

        <label>
          <span>Valor Máximo:</span>
          <input
            type="number"
            value={valMax}
            onChange={(event) => onChangeValMax(event)}
          />
        </label>
        <label>
          <span>Valor Mínimo:</span>
          <input
            type="number"
            value={valMin}
            onChange={(event) => onChangeValMin(event)}
          />
        </label>
        <label>
          <span>Procurar:</span>
          <input
            type="text"
            value={nome}
            onChange={(event) => onChangeNome(event)}
          />
        </label>

        <button type="submit" onClick={() => onClickDados()}>
          Procurar
        </button>
      </Forms>
    </>
  );
}
