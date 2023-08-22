import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export function OrderProvider({children}) {
    const [orderInfo, setOrderInfo] = useState({
        address: {
            name: '',
            phone: '',
            email: '',
            city: '',
            address: ''
        },
        shipping: {
            deliveryMethod: 'standard-shipping',
            price: 0
        },
        payment: {
            name: '',
            number: '',
            expiredAt: '',
            CVC: ''
        }
    })

    const [step, setStep] = useState(1)

    function handleStep(e) {
        const isNext = e.target.classList.contains('nextStepBtn')
        if (step === 3) {
           return setStep(isNext ? step : step -1)
        }
       
        setStep(isNext ? step + 1 : step - 1)
        
    }

    function handleOrderInfo(e, step) {
        let objectName = ''
        if (step === 1) {
            objectName = 'address'
        }else if (step === 3) {
            objectName = 'payment'
        }else {
            objectName = 'shipping'
        }

        if (objectName === 'shipping') {
            setOrderInfo({
                ...orderInfo,
                [objectName]: {
                    [e.target.name]: e.target.id,
                    price: parseInt(e.target.dataset.price)
                }
            })
        }else {
            setOrderInfo({
                ...orderInfo,
                [objectName]: {
                    ...orderInfo[objectName],
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    const value ={
        orderInfo,
        step,
        handleStep,
        handleOrderInfo
    }

    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    )
}