function OrderSummary(
    {
        orderId, totalPrice, isPaid    
    }
){
    return (
        <>
        <h3><b>Order ID: {orderId}</b></h3>
        <p>
            <ul>
                <li>TP: {totalPrice}</li>
                <li>Pagado: 
    {isPaid ? "Pagado" : "SIN PAGAR!"}
                </li>
            </ul>
        </p>
        </>
    )
}

export default OrderSummary;