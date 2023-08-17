import styles from './StepProgress.module.css'

function StepItem({number, title, currentStep}) {
    return (
        <div className={styles.step}>
            <div className={styles.circleContainer}>
                <div className={`${styles.stepNumber} ${currentStep > number ? styles.active : ''}`}>{number}</div>
            </div>
            <div className={styles.lableContainer}>{title}</div>
        </div>
    )
}

export default StepItem