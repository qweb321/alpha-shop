import Button from "./Button"
import styles from "./ProgressControl.module.css"
import rightArrow from '../../../public/icon/right-arrow.svg'
import leftArrow from '../../../public/icon/left-arrow.svg'

function ProgressControl() {
    return (
        <section className={styles.buttonGroup}>
            <Button className="prevStepBtn">
                <img src={leftArrow} alt="" />
                上一步
            </Button>
            <Button className="nextStepBtn">
                <img src={rightArrow} alt="" />
                下一步
            </Button>
        </section>
    )
}

export default ProgressControl;