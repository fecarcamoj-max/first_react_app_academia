function ProductCard(
    {name, price, 
        isAvailable}){


    return (
        <>
            <hr/>
            <ul>
                <li>{name}</li>
                <li>{price}</li>
<li>{isAvailable ? "Disponible" : "No disponible"}</li>
            </ul>
            <hr/>
        </>
    )
}

export default ProductCard
