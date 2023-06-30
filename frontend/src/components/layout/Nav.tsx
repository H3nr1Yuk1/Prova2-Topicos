import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav>

      <ul>

        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>

        <li>
          <Link to="/listar">Listar</Link>
        </li>

        <li>
          <Link to="/visualizar">Visualizar Total e Média</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Nav;