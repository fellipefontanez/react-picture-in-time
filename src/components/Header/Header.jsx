import logo from "../../assets/1024.png"
import svg from "../../assets/profile.svg"
import styles from "./header.module.css"
import { useState } from "react"


export default function Header() {

    const [user, setUser] = useState(false)
    
    return(
        <header className={styles.header_container}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src={logo} alt="logo" />
                <span className={styles.nome}>Picture in time</span>
            </div>
            <div className={styles.container_usuario}>
                <img className={styles.logo} src={svg} alt=""  onClick={()=>setUser(!user)}/>
                {user && <ul className={styles.usuario_opcao}>
                    <li className={styles.opcao_item}>Meu perfil</li>
                    <li className={styles.opcao_item}>Sair</li>
                </ul>}
            </div>

        </header>
    )
}