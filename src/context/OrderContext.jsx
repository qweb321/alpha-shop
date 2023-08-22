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

    return (
        <OrderContext.Provider value={{orderInfo, handleOrderInfo}}>{children}</OrderContext.Provider>
    )
}