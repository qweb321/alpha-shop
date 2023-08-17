import AddressForm from "./AddressForm"
import DeliveryForm from "./DeliveryForm"
import PaymentForm from "./PaymentForm"

function StepForm({currentStep}) {
    let formControl;
    if (currentStep === 1) {
        formControl = <AddressForm />
    }else if (currentStep === 2) {
        formControl = <DeliveryForm />
    }else if (currentStep === 3) {
        formControl = <PaymentForm />
    }
    return (
        <>
            <form className="formControl">
                {formControl}
                <hr />
            </form>
        </>
    )
}


export default StepForm;