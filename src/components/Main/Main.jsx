import styles from './Main.module.css'
import StepProgress from './Progress/StepProgress'
import StepForm from './Progress/StepForm'
import Cart from './Cart/Cart'
import ProgressControl from './Progress/ProgressControl'
import { useState } from 'react'

function Main() {
    const [step, setStep] = useState(1)
    function handleStep(e) {
        const isNext = e.target.classList.contains('nextStepBtn')
        if (step === 3) {
           return setStep(isNext ? step : step -1)
        }
       
        setStep(isNext ? step + 1 : step - 1)
        
    }
    console.log(step);
    return (
        <div className={styles.mainContainer}>
            <section className={styles.registerContainer}>
                <StepProgress currentStep={step}/>
                <StepForm currentStep={step} />  
            </section>
            <Cart />
            <ProgressControl onStepControl={handleStep} currentStep={step}/>
        </div>
    )
}

export default Main;