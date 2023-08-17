import styles from "./StepProgress.module.css";
import StepItem from './StepItem'

function StepProgress({currentStep}) {
    return (
        <section className="stepper">
            <h2 className={styles.stepTitle}>結帳</h2>
            <div className={styles.stepperContainer}>
                <StepItem title="寄送地址" number="1" currentStep={currentStep} />
                <span className={styles.connectLine}></span>
                <StepItem title="運送方式" number="2" currentStep={currentStep} />
                <span className={styles.connectLine}></span>
                <StepItem title="付款資訊" number="3" currentStep={currentStep} />
            </div>
        </section>
    )
}

export default StepProgress;