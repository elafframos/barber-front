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

    const [days, SetDay] = useState(null)
    const [estado, setEstado] = useState(null)

    function SelectedDay (day){
            if (day === days ) {
                return dateStyles.cardSelected
            } 
        }

    function Selected(time){
            if (time === estado ) {
                return dateStyles.cardSelected
            } 
        }

        function handleNext(){
        if(!estado || !days){
            alert('Escolha um dos horários abaixo!')
        } else {
            onSelect(estado, days)
        }
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
                    <span className={`${dateStyles.days} ${SelectedDay(index + 1)}`} onClick={() => SetDay(index + 1)} key={index}> {index + 1} </span>))}
                </div>
            </div>
                <br />
                        
                <h5 className={dateStyles.h5}>HORÁRIOS DISPONÍVEIS</h5>
                <br />
                <div className={dateStyles.time}>
                    <p className={`${dateStyles.hours} ${Selected("15:30")}`} onClick={() => setEstado("15:30")}>15:30</p>
                    <p className={`${dateStyles.hours} ${Selected("16:00")}`} onClick={() => setEstado("16:00")}>16:00</p>
                    <p className={`${dateStyles.hours} ${Selected("16:30")}`} onClick={() => setEstado("16:30")}>16:30</p>
                    <p className={`${dateStyles.hours} ${Selected("17:00")}`} onClick={() => setEstado("17:00")}>17:00</p>
                    <p className={`${dateStyles.hours} ${Selected("17:30")}`} onClick={() => setEstado("17:30")}>17:30</p>
                    <p className={`${dateStyles.hours} ${Selected("18:00")}`} onClick={() => setEstado("18:00")}>18:00</p>
                    <p className={`${dateStyles.hours} ${Selected("18:30")}`} onClick={() => setEstado("18:30")}>18:30</p>
                    <p className={`${dateStyles.hours} ${Selected("19:00")}`} onClick={() => setEstado("19:00")}>19:00</p>
                    <p className={`${dateStyles.hours} ${Selected("19:30")}`} onClick={() => setEstado("19:30")}>19:30</p>
                    <p className={`${dateStyles.hours} ${Selected("20:00")}`} onClick={() => setEstado("20:00")}>20:00</p>
                    <p className={`${dateStyles.hours} ${Selected("20:30")}`} onClick={() => setEstado("20:30")}>20:30</p>
                    <p className={`${dateStyles.hours} ${Selected("21:00")}`} onClick={() => setEstado("21:00")}>21:00</p>
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