import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Despesas } from "../../models/despesas.model";

function Listar() {
    const [despesas, setDespesa] = useState([]);
  
    function carregarDados() {
      axios
        .get("http://localhost:3001")
        .then((resposta) => {
          setDespesa(resposta.data.dados);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  
    useEffect(() => {
      carregarDados();
    }, []);
  
    function remover(id: number) {
      axios
        .delete("http://localhost:3001/" + id)
        .then((resposta) => {
          carregarDados();
        })
        .catch((erro) => {
          // console.log(erro);
        });
    }
  
    return (
      <div>
        <h1>Listagem de Despesas</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Detalhes</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {despesas.map((produto: any) => (
              <tr>
                <td>{despesas.id}</td>
                <td>{despesas.descricao}</td>
                <td>{despesas.preco}</td>
                <td>
                  {/* <Link to={"/detalhes/" + produto.id}> Detalhes </Link> */}
                  <Link to={`/detalhar/${despesas.id}`}> Detalhes </Link>
                </td>
                <td>
                  <button onClick={() => remover(despesas.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Listar;