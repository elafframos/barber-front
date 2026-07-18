import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import StepService from "../components/StepService";
import StepDateTime from "../components/StepDateTime";
import StepConfirm from "../components/StepConfirm";
import styles from "./Booking.module.css";
import { useState } from "react";

function Agendar(){
    const [ativo, setAtivo] = useState(1)
    const [escolhido, setEscolhido] = useState(null)

    // Função para mudar a cor do circulo
    function Progress(passo){
        if(passo < ativo){
            return styles.complet
        } else if(passo == ativo){
            return styles.progress
        }
    }

    // Função para mudar a cor do texto
    function ProgressText(passo){
        if(passo == ativo){
            return styles.progressText
        }
    }

    // Função para mudar a cor da linha
    function ProgressLinha(passo){
        if(passo < ativo){
            return styles.completLinha
        } 
    }

    return (
        <>
            <Navbar/>
            <br />
            <div className={styles.main}>  
                <div className={styles.content}>
                    <div className={styles.numbers}>
                        <div className={styles.nav}>
                            <span className={`${styles.span} ${Progress(1)}`}>
                                1 
                            </span>
                            <p className={`${ProgressText(1)}`}>Serviço</p>
                        </div>
                        <div className={`${styles.linha} ${ProgressLinha(1)}`}></div>

                        <div className={styles.nav}>
                            <span className={`${styles.span} ${Progress(2)}`}>
                                2 
                            </span>
                            <p className={`${ProgressText(2)}`}>Data e Hora</p>
                        </div>
                        <div className={`${styles.linha} ${ProgressLinha(2)}`}></div>

                        <div className={styles.nav}>
                            <span className={`${styles.span} ${Progress(3)}`}>
                                3 
                            </span>
                            <p className={`${ProgressText(3)}`}>Confirmar</p>
                        </div>
                    </div>
                </div>
            </div>
            {ativo === 1 && <StepService onSelect={(servico) => { setEscolhido(servico); setAtivo(2) }}/>}
            {ativo === 2 && <StepDateTime onSelect={(servico) => { setEscolhido(servico); setAtivo(3) }} onBack={() => { setAtivo(1) }}/>}
            {ativo === 3 && <StepConfirm onSelect={(servico) => { setEscolhido(servico); setAtivo(4) }}/>}

            <Footer/>
        </>
    )
}

export default Agendar