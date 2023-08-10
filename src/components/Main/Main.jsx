import styles from './Main.module.css'
import StepProgress from './Progress/StepProgress'
import StepForm from './Progress/StepForm'
import Cart from './Cart/Cart'
import ProgressControl from './Progress/ProgressControl'

function Main() {
    return (
        <div className={styles.mainContainer}>
            <section className={styles.registerContainer}>
                <StepProgress />
                <StepForm />  
            </section>
            <Cart />
            <ProgressControl />
        </div>
    )
}

export default Main;