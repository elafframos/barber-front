import { useNavigate } from "react-router-dom"
import '../App.css'

function ServiceCard(){

    const navigate = useNavigate()

    return (
        <>
            <section className='services'>

                <button className='button-services' onClick={() => navigate('/agendar')}>
                    <p className='image'>✂️</p> <br />
                    Corte Rápido
                    <p className='service-money'>R$ 45</p>
                    <p className='service-min'>30 min</p>
                </button>

                <button className='button-services' onClick={() => navigate('/agendar')}>
                    <p className='image'>🪒</p> <br />
                    Barba Completa
                    <p className='service-money'>R$ 35</p>
                    <p className='service-min'>25 min</p>
                </button>

                <button className='button-services' onClick={() => navigate('/agendar')}>
                    <p className='image'>💈</p> <br />
                    Corte + barba 
                    <p className='service-money'>R$ 70</p>
                    <p className='service-min'>55 min</p>
                </button>

            </section> 
        </>
    )
}

export default ServiceCard