import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main> 

        <p className='headline'>
          <div class="linha-horizontal"></div>  <h3>BARBEARIA PREMIUM</h3> <div class="linha-horizontal"></div>
        </p >

        <p className='title'>
          O corte certo, <br />
          na hora <span>certa.</span>
        </p>

        <br />
        <br />

        <p className='sub-title'>
          Agende online em segundos. Sem filas, sem espera — só você e o melhor acabamento da cidade.
        </p>

        <br />
        <br />

        <p className='agend-buttons'>
          <button onClick={() => navigate('/agendar')}>Agendar agora</button>

          <button>Ver meus agendamentos</button>
        </p>

        <br />
        <br />

        <ServiceCard />

      </main>

      <Footer />
    </>
  )
}

export default Home
