import axios from "axios";
import { useEffect, useState } from "react";
import { Despesas } from "../../models/despesas.model";

function Listar() {
    const [despesas, setDespesa] = useState<Despesas[]>([]);

    useEffect(() => {
      axios
      .get("http://localhost:3333/listar")
      .then((resposta) => {
          setDespesa(resposta.data.lista);
      })
      .catch((erro) => {
        console.log(erro);
      });
    })
  
    return (
      <div>
        <center>
            <h1>Listagem de Despesas</h1>
            <table>
            <thead>
                <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {despesas.map((despesa: any) => (
                <tr>
                    <td>{despesa.id}</td>
                    <td>{despesa.descricao}</td>
                    <td>R$ {despesa.preco}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </center>
      </div>
    );
  }
  
  export default Listar;