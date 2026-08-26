import { useNavigate } from "react-router-dom"
import '../App.css'
import { useState } from "react"

function Navbar(){

    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState()

    return (
        <>
            <header>
                <h1>Barbers<span>.</span></h1>
                <p>
                <a onClick={() => navigate('/')}>Início</a>
                <a onClick={() => navigate('/agendar')}>Agendar</a>
                {isAdmin && <a onClick={() => navigate('/admin')}>Admin</a>}
                </p>

               <button onClick={() => navigate('/login')}>Entrar</button>
            </header>

            <hr />
        </>
    )
}

export default Navbar