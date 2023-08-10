import styles from './Button.module.css'


function Button({type, children, className}) {
    const classPrevStepBtn =
        className === "nextStepBtn" ? styles.nextStepBtn : "";
    const classNextStepBtn =
        className === "prevStepBtn" ? styles.prevStepBtn : "";
    return (
        <button className={ `${styles.button} ${classPrevStepBtn} ${classNextStepBtn}` } type={type}>
            {children}
        </button>
    )
}

export default Button;