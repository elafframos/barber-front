import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import styles from './Login.module.css'

function Login(){
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <form action="" method="post">
                    <h3>Bem-vindo</h3> <br />
                    <p className={styles.subTitle}>Entre para ver seus agendamentos</p> <br />

                    <label className={styles.label}>E-MAIL</label> <br /> 
                    <input className={styles.input} type="email" placeholder="seu@enail.com"/> <br /> <br />

                    <label className={styles.label}>SENHA</label> <br /> 
                    <input className={styles.input} type="password" placeholder="*******"/> <br /> <br />

                    <button className={styles.buttonEntrar}>Entrar</button> 

                    <div className={styles.ou}>
                        <div class="linha-horizontal"></div>   ou   <div class="linha-horizontal"></div>
                    </div>

                    <button className={styles.buttonConta}>Continuar sem conta</button> <br /> <br />

                    <a href="" className={styles.cadastro}>Não tem conta? Cadastre-se</a>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Login