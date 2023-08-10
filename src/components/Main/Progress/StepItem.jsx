import styles from './StepProgress.module.css'

function StepItem({number, title}) {
    return (
        <div className={styles.step}>
            <div className={styles.circleContainer}>
                <div className={styles.stepNumber}>{number}</div>
            </div>
            <div className={styles.lableContainer}>{title}</div>
        </div>
    )
}

export default StepItem