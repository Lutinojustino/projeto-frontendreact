import React, { useEffect, useState } from "react";
import { MainStyle, Rest, MainStyleCar } from "./GlobalStyle";
import Header from "./components/header";
import Itens from "./assets/Itens.json";
import Produtos from "./components/produtos";
import Footer from "./components/footer";
import Filter from "./components/filter";
import Carrinho from "./components/carrinho";

function App() {
  const [trocarTela, setTrocarTela] = useState(1);
  const [valMin, setValMin] = useState("");
  const [valMax, setValMax] = useState("");
  const [nome, setNome] = useState("");
  const [ordenar, setOrdenar] = useState("");
  const [listaItem, setListaItem] = useState([]);
  const [quantidade, setQuantidade] = useState(1);
  const [carroDeCompra, setCarroDeCompra] = useState(0);

  const addNoCarro = (produto) => {
    const newCar = [...listaItem];
    const adicionar = newCar.find((item) => item.id === produto.id);

    if (!adicionar) {
      newCar.push({
        id: produto.id,
        name: produto.name,
        imagem: produto.imagem,
        valor: produto.valor,
        quantidade: produto.quantidade,
      });
    } else {
      produto.quantidade = produto.quantidade + 1;
    }
    setListaItem(newCar);
    setCarroDeCompra(produto.valor);
    setQuantidade(produto.quantidade);
  };

  // useEffect(()=>{

  // },{

  // })

  const removerCarroDeCompras = (produto) => {
    const copyNewCar = [...listaItem];
    const item = copyNewCar.find((item) => item === produto);
    const carroFiltrado = listaItem.filter((item) => item !== produto);
    setListaItem(carroFiltrado);
  };

  function irPara(Tela) {
    if (Tela === 1) {
      return trocarTela === 1 ? setTrocarTela(2) : setTrocarTela(1);
    } else {
      return trocarTela === 2 ? setTrocarTela(1) : setTrocarTela(2);
    }
  }

  return (
    <>
      <Rest />

      {trocarTela === 1 ? (
        <>
          <Header irPara={irPara} />
          <MainStyle>
            <section>
              <Filter
                valMin={valMin}
                setValMin={setValMin}
                valMax={valMax}
                setValMax={setValMax}
                nome={nome}
                setNome={setNome}
                ordenar={ordenar}
                setOrdenar={setOrdenar}
              />
            </section>
            <section className="Card">
              {Itens.filter((item) => {
                if (valMin !== " " && valMax !== 0) {
                  if (item.valor >= valMin && item.valor <= valMax) {
                    return item.valor;
                  }
                } else if (valMin === "" && valMax === "") {
                  setValMin(0);
                  setValMax(9999);
                }
              })
                .filter((item) => {
                  return item.name
                    .toLowerCase()
                    .includes(nome.toLowerCase().trimEnd());
                })
                .sort((item, item1) => {
                  switch (ordenar) {
                    case "Crescente":
                      return item.name.localeCompare(item1.name);
                    case "Decrescente":
                      return item1.name.localeCompare(item.name);
                    case "Menor-Maior":
                      return item.valor.localeCompare(item1.valor);
                    case "Maior-Menor":
                      return item1.valor.localeCompare(item.valor);
                    default:
                      return item;
                  }
                })
                .map((item) => {
                  return (
                    <Produtos
                      addNoCarro={addNoCarro}
                      key={item.id}
                      imagem={item.imagem}
                      name={item.name}
                      valor={item.valor}
                      id={item.id}
                      item={item}
                    />
                  );
                })}
            </section>
          </MainStyle>
          <Footer />
        </>
      ) : (
        <>
          <Header irPara={irPara} />
          <MainStyleCar>
            {listaItem.map((item) => {
              return (
                <Carrinho
                  removerCarroDeCompras={removerCarroDeCompras}
                  key={item.id}
                  item={item}
                  imagem={item.imagem}
                  name={item.name}
                  valor={item.valor}
                  id={item.id}
                  quantidade={quantidade}
                  irPara={irPara}
                  carroDeCompra={carroDeCompra}
                  setCarroDeCompra={setCarroDeCompra}
                />
              );
            })}

            <span className="valTotal">
              <h2>Valor Total:{carroDeCompra}</h2>
            </span>
            <button onClick={(tela) => irPara(1)}>Voltar</button>
          </MainStyleCar>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
