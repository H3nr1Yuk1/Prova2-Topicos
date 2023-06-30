import axios from "axios"
import { useEffect, useState } from "react"
import styles from './vizualizar.module.css'

function Vizualizar(){
    const [total, setTotal] = useState()
    const [media, setMedia] = useState()

    useEffect(() => {
        axios
        .get("http://localhost:3333/calcular")
        .then((resposta) => {
            setTotal(resposta.data.total)
            setMedia(resposta.data.media)
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return (
        <div>
            <center>
                <h1>Total e média das despesas</h1>
                <table>
                    <tr>
                        <td>Total:</td>
                    </tr>
                    <tr>
                        <td className={styles.resultado}>R$ {total}</td>
                    </tr>
                    <tr>
                        <td>Média</td>
                    </tr>
                    <tr>
                        <td className={styles.resultado}>R$ {media}</td>
                    </tr>
                </table>
            </center>
        </div>
    )
}

export default Vizualizar