import axios from "axios";
import { useState } from "react";
import { Despesas } from "../../models/despesas.model";
// import Button from "@mui/material/Button";

function Cadastrar() {
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    //Enviar o produto para a API, através FETCH ou AXIOS
    let despesas: Despesas = new Despesas();
    despesas.descricao = descricao;
    despesas.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3001", despesas)
      .then((resposta) => {
        //Executar algo quando a requisição for bem sucedida
        //Códigos HTTP na faixa do 200
        //Redirecionar para o componente da listagem
        console.log(resposta.data.mensagem);
        setDescricao("");
        setPreco("");
      })
      .catch((erro) => {
        //Executar algo quando a requisição for mal sucedida
        //Códigos HTTP na faixa do 400 e 500
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Produto</h1>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          onChange={(event: any) => setDescricao(event.target.value)}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event: any) => setPreco(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Cadastrar;