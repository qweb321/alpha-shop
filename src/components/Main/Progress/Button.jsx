import styles from './Button.module.css'


function Button({type, children, className, onClick}) {
    const classPrevStepBtn =
        className === "nextStepBtn" ? styles.nextStepBtn : "";
    const classNextStepBtn =
        className === "prevStepBtn" ? styles.prevStepBtn : "";
    return (
        <button className={ `${styles.button} ${classPrevStepBtn} ${classNextStepBtn} ${className}` } type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;