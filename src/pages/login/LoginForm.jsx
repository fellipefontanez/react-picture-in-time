import styles from "./login.module.css"
import { Icon } from "@iconify/react";
import logo from "../../assets/1024.png"

const Login = () =>{


    return(
        <main className={styles.main}>
            <img className={styles.logo} src={logo} alt=""/>
            <h2 className={styles.title}>Bem vindo ao Picture in time!</h2>
            <p className={styles.paragrafo}>Para continuar você precisa fazer login com sua conta Unsplash</p>
            <a className={styles.login_botao} href="https://unsplash.com/oauth/authorize?client_id=l2yXgd4UaAleOP2j7R9VneHn_66R3_444bjxNkmVRwY&redirect_uri=https://react-picture-in-time-l4zskhi3v-fellipefontanez.vercel.app/feed&response_type=code&scope=public+read_user+read_photos+write_likes">
            <Icon icon="ri:unsplash-fill" /> Entrar
            </a>
        </main>
        )
}

export default Login;