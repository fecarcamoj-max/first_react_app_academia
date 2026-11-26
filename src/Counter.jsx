import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
    // count es el state. es la variable.
    // setCount es la funcion de actualizacion
    function increase(){
        setCount(count + 1);
    }

    return (
        <>
        Contador: {count}
        <br/>
        <button 
            onClick={increase} 
            > +1 
        </button>
        </>
    )
}

export default Counter;