import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>

      <ul>

        <li>
          <Link to='/' className={styles.Link}>Home</Link>
        </li>

        <li>
          <Link to="/Cadastrar" className={styles.Link}>Cadastrar</Link>
        </li>

        <li>
          <Link to="/Listar" className={styles.Link}>Listar</Link>
        </li>

        <li>
          <Link to="/Vizualizar" className={styles.Link}>Visualizar Total e Média</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Nav;