import AddressForm from "./AddressForm"
import Button from "./Button"
import rightArrow from '../public/icon/right-arrow.svg'
import leftArrow from '../public/icon/left-arrow.svg'
import styles from './StepForm.module.css'
import PaymentForm from './PaymentForm'

function StepForm() {
    return (
        <form className="formControl">
            <AddressForm />
            <hr />
            <div className={styles.buttonGroup}>
                <Button className="prevStepBtn">
                    <img src={leftArrow} alt="" />
                    上一步
                </Button>
                <Button className="nextStepBtn">
                    <img src={rightArrow} alt="" />
                    下一步
                </Button>
            </div>
        </form>
    )
}


export default StepForm;