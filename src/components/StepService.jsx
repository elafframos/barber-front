import { useState } from "react";
import styles from "../pages/Booking.module.css";

function StepService(){
    // Para deixar os sevições selecionados
    const [estado, setEstado] = useState('')

    function Selected(servico){
        if (servico === estado ) {
            return styles.cardSelected
        } 
    }

    function handleNext(){
        if(!estado){
            alert('Escolha um dos serviços abaixo!')
        } else {
            
        }
    }
 
return (
    <>
        <main className={styles.main}>  
            <div className={styles.content}>
                    <div className={styles.numbers}>
                        <div className={styles.nav}>
                            <span className={styles.span}>
                                1 
                            </span>
                            <p>Serviço</p>
                        </div>
                        <div className={styles.linha}></div>

                        <div className={styles.nav}>
                            <span className={styles.span}>
                                2 
                            </span>
                            <p>Data e Hora</p>
                        </div>
                        <div className={styles.linha}></div>

                        <div className={styles.nav}>
                            <span className={styles.span}>
                                3 
                            </span>
                            <p>Confirmar</p>
                        </div>
                    </div>

                    <br />
                    <br />
                <div className={styles.each}>
                    <h5 className={styles.h5}>ESCOLHA O SERVIÇO</h5>
                    <div className={`${styles.card} ${Selected('corte')}`} onClick={() => setEstado('corte')}>
                        <p>Corte clássico <br /> <span className={styles.min}>30 min</span></p>
                        <p className={styles.money}>R$ 45</p>
                    </div>

                    <div className={`${styles.card} ${Selected('barba')}`} onClick={() => setEstado('barba')}>
                        <p>Barba completa <br /> <span className={styles.min}>25 min</span></p>
                        <p className={styles.money}>R$ 35</p>
                    </div>

                    <div className={`${styles.card} ${Selected('corte+barba')}`} onClick={() => setEstado('corte+barba')}>
                        <p>Corte + barba <br /> <span className={styles.min}>55 min</span></p>
                        <p className={styles.money}>R$ 70</p>
                    </div> 

                    <button className={styles.button} onClick={handleNext}><b>Escolher data e hora</b></button>
                </div>
            </div>


        </main>
    </>
)
}

export default StepService