import Constyle from "../components/confirm.module.css"
import { useNavigate } from "react-router-dom"

function StepConfirm({onBack}){
    
    const navigate = useNavigate()
   
return (
    <>
        <br /> <br /> <br />
        <main className={Constyle.main}>  
            <div className={Constyle.content}>
                <div className={Constyle.bola}>
                    <span className={Constyle.span}>
                    ✓
                    </span>
                </div>
                <br />
                <br />
                <h2>Agendamento confirmado!</h2>
                <br />
                <p>Você receberá uma confirmação por e-mail em breve.</p>
                <br />
                <div className={Constyle.services}>
                    <p>Serviço</p>
                    <p>Data</p>
                    <p>Horário</p>
                    <p>Duração</p>
                    <p>Total</p>
                </div>  
                <br />
                <p>Confirmação enviada para seu e-mail</p>
                <br />
                <button className={Constyle.button} onClick={() => navigate('/')}><b>Voltar ao início</b></button>
            </div>
        </main>
    </>
)
}

export default StepConfirm