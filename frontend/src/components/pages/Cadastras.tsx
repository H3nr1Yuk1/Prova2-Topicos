import axios from "axios";
import { useState } from "react";
import { Despesas } from "../../models/despesas.model";

function Cadastrar() {
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    let despesas: Despesas = new Despesas();
    despesas.descricao = descricao;
    despesas.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3333", despesas)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setDescricao("");
        setPreco("");
      })
      .catch((erro) => {
        console.log(erro);
      });

  }

  return (
    <div>
      <center>
        <h1> Cadastrar Produto</h1>
        <table>
          <tr>
            <td>Descrição:</td>
            <td><input type="text" onChange={(event: any) => setDescricao(event.target.value)}/></td>
          </tr>
          <tr>
            <td>Preço:</td>
            <td><input type="text" onChange={(event: any) => setPreco(event.target.value)} /></td>
          </tr>
        </table>
        <br />
        <button onClick={enviar}> Cadastrar </button>
      </center>
    </div>
  );
}

export default Cadastrar;