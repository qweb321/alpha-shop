import Button from "./Button"
import styles from "./ProgressControl.module.css"
import rightArrow from '../../../public/icon/right-arrow.svg'
import leftArrow from '../../../public/icon/left-arrow.svg'
import { OrderContext } from "../../../context/OrderContext"
import { useContext } from "react"

function ProgressControl({onStepControl, currentStep}) {
    const {orderInfo} = useContext(OrderContext)
    if (currentStep === 1) {
        return (
        <section className={styles.buttonGroup}>
            <Button className="nextStepBtn" onClick={onStepControl}>
                <img src={rightArrow} alt="" className="nextStepBtn" />
                下一步
            </Button>
        </section>)
    }

    return (
        <section className={styles.buttonGroup}>
            <Button className="prevStepBtn" onClick={onStepControl}>
                <img src={leftArrow} className="prevStepBtn" alt="" />
                上一步
            </Button>
            <Button className="nextStepBtn" onClick={ currentStep === 3 ? () => {console.log(orderInfo)}: onStepControl}>
                <img src={rightArrow} alt="" className="nextStepBtn" />
                {currentStep === 3 ? '確認下單' : '下一步'}
            </Button>
        </section>
    )
}

export default ProgressControl;