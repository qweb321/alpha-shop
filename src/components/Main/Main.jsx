import styles from './Main.module.css'
import StepProgress from './Progress/StepProgress'
import StepForm from './Progress/StepForm'
import Cart from './Cart/Cart'
import ProgressControl from './Progress/ProgressControl'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

function Main() {

    const { handleStep, step } = useContext(OrderContext)
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