import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import './Login.module.css'

function Login(){
    return (
        <>
            <Navbar />
            <hr />

            <main>
                <form action="" method="post">
                    <h3>Bem-vindo</h3>
                    <p>Entre para ver seus agendamentos</p>

                    <label>E-MAIL</label>
                    <input type="email"/>

                    <label>SENHA</label>
                    <input type="password"/>

                    <button>Entrar</button>

                    <p>ou</p>

                    <button>Continuar sem conta</button>

                    <a href="">Não tem conta? Cadastre-se</a>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Login