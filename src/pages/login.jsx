import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import styles from './Login.module.css'
import { login } from "../services/api"
import { useState } from "react"

function Login(){
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const data = await login(formData.username, formData.password)
    console.log(data)
    setLoading(false)
}

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <form action="" method="post" onSubmit={ handleSubmit }>
                    <h3 className={styles.h3}>Bem-vindo</h3> <br />
                    <p className={styles.subTitle}>Entre para ver seus agendamentos</p> <br />

                    <label className={styles.label}>E-MAIL</label> <br /> 
                    <input className={styles.input} type="text" placeholder="Seu nome de usuário " value={ formData.username } onChange={(e) => setFormData({...formData, username: e.target.value})} required/> <br /> <br />

                    <label className={styles.label}>SENHA</label> <br /> 
                    <input className={styles.input} type="password" placeholder="*******" value={ formData.password } onChange={(e) => setFormData({...formData, password: e.target.value})} required/> <br /> <br />

                    <button type="submit" className={styles.buttonEntrar}  disabled={loading}>{loading ? 'Entrando...' : 'Entrar'} </button> 

                    <div className={styles.ou}>
                        <div class={styles.linhaHorizontal}></div> ou <div class={styles.linhaHorizontal}></div>
                    </div>

                    <button className={styles.buttonConta}>Continuar sem conta</button> <br /> <br />

                    <a href="" className={styles.cadastro}>Não tem conta? <span>Cadastre-se</span></a>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Login