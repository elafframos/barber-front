import { useNavigate } from "react-router-dom"
import '../App.css'

function Navbar(){

    const navigate = useNavigate()

    return (
        <>
            <header>
                <h1>Barbers<span>.</span></h1>
                <p>
                <a onClick={() => navigate('/')}>Início</a>
                <a onClick={() => navigate('/agendar')}>Agendar</a>
                <a onClick={() => navigate('/admin')}>Admin</a>
                </p>

               <button onClick={() => navigate('/login')}>Entrar</button>
            </header>

            <hr />
        </>
    )
}

export default Navbar