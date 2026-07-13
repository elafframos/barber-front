import { useState } from "react";
import styles from "../pages/Booking.module.css";
import dateStyles from "../components/date.module.css"

function StepDateTime({onSelect, onBack}){
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    const data = new Date();
    const mes = data.getMonth();
    const ano = data.getFullYear(); 

    const totalDias = new Date(ano, mes, 0).getDate();
    const primeiroDia = new Date(ano, mes , 1).getDay();

    function handleNext(){
        onSelect()
    }

return (
    <>
        <main className={dateStyles.main}> 
            <div className={dateStyles.section}>
                <br />
                <h5 className={styles.h5}>ESCOLHA A DATA</h5>
                <br />
                <div>
                <div className={dateStyles.dataTitle}>
                    <button className={dateStyles.seta}> ‹ </button> {meses[mes]} <button className={dateStyles.seta}> › </button>
                </div>
                <br />
                <div className={dateStyles.dataWeek}>
                    <p>Dom</p>
                    <p>Seg</p>
                    <p>Ter</p>
                    <p>Qua</p>
                    <p>Quin</p>
                    <p>Sex</p>
                    <p>Sáb</p>
                    
                    <br />
                     {Array.from({ length: primeiroDia }, (_, index) => (
                    <span className={dateStyles.days} key={index}> </span>))}

                    {Array.from({ length: totalDias }, (_, index) => (
                    <span className={dateStyles.days} key={index}> {index + 1} </span>))}
                </div>
            </div>
                <br />
                        
                <h5 className={dateStyles.h5}>HORÁRIOS DISPONÍVEIS</h5>
                <br />
                <div className={dateStyles.time}>
                    <p className={dateStyles.hours}>15:30</p>
                    <p className={dateStyles.hours}>16:00</p>
                    <p className={dateStyles.hours}>16:30</p>
                    <p className={dateStyles.hours}>17:00</p>
                    <p className={dateStyles.hours}>17:30</p>
                    <p className={dateStyles.hours}>18:00</p>
                    <p className={dateStyles.hours}>18:30</p>
                    <p className={dateStyles.hours}>19:00</p>
                    <p className={dateStyles.hours}>19:30</p>
                    <p className={dateStyles.hours}>20:00</p>
                    <p className={dateStyles.hours}>20:30</p>
                    <p className={dateStyles.hours}>21:00</p>
                </div>
            </div>
            <br />
            
            <div className={dateStyles.center}>
                <div className={dateStyles.buttons}>
                    <button className={dateStyles.buttonBack} onClick={onBack}>Voltar</button>
                    <button className={dateStyles.button} onClick={handleNext}>Confirmar agendamento</button>
                </div>
            </div>
        </main>
    </>
)
}

export default StepDateTime