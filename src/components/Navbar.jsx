import Login from '../pages/login'

function Navbar(){
    return (
        <>
            <header>
                <h1>Barber.</h1>
                <p>
                <a href="">Início</a>
                <a href="">Agendar</a>
                <a href="">Admin</a>
                </p>

                <button onClick={<Login/>}>Entrar</button>
            </header>
        </>
    )
}

export default Navbar