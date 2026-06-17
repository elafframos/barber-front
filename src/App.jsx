import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Barber.</h1>
        <p>
          <a href="">Início</a>
          <a href="">Agendar</a>
          <a href="">Admin</a>
        </p>

        <button>Entrar</button>
      </header>
      <hr />
      <main> 

        <p className='headline'>
          <div class="linha-horizontal"></div>  <h3>BARBEARIA PREMIUM</h3> <div class="linha-horizontal"></div>
        </p >

        <p className='title'>
          O corte certo, <br />
          na hora certa.
        </p>

        <br />
        <br />

        <p className='sub-title'>
          Agende online em segundos. Sem filas, sem espera — só você e o melhor acabamento da cidade.
        </p>

        <br />
        <br />

        <p className='agend-buttons'>
          <button>Agendar agora</button>

          <button>Ver meus agendamentos</button>
        </p>

        <br />
        <br />

        <section className='services'>

          <button className='button-services'>
            <p className='image'>✂️</p> <br />
            Corte Rápido
            <p className='service-money'>R$ 45</p>
            <p className='service-min'>30 min</p>
          </button>

          <button className='button-services'>
            <p className='image'>🪒</p> <br />
            Barba Completa
            <p className='service-money'>R$ 35</p>
            <p className='service-min'>25 min</p>
          </button>

          <button className='button-services'>
            <p className='image'>💈</p> <br />
            Corte + barba 
            <p className='service-money'>R$ 70</p>
            <p className='service-min'>55 min</p>
          </button>

        </section> 
      </main>

      <footer>
        &copy; Élaff Ramos 2026 | Todos os direitos reservados.
      </footer>
    </>
  )
}

export default App
