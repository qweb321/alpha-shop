import styles from "./StepProgress.module.css";
import StepItem from './StepItem'

function StepProgress() {
    return (
        <section className="stepper">
            <h2 className={styles.stepTitle}>結帳</h2>
            <div className={styles.stepperContainer}>
                <StepItem title="寄送地址" number="1" />
                <span className={styles.connectLine}></span>
                <StepItem title="運送方式" number="2" />
                <span className={styles.connectLine}></span>
                <StepItem title="付款資訊" number="3" />
            </div>
        </section>
    )
}

export default StepProgress;