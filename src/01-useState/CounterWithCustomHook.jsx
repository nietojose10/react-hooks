import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    
    //Si lo que se esta desestructurando es un objeto se utilizan Llaves para desestructurar
    //Si lo que se esta desestructurando es un arreglo se utilizan corchetes para desestructurar
    const { counter, increment, decrement, reset } = useCounter();
  
    return (
        <>
            <h1>Counter with hook: { counter }</h1>
            
            <hr/>

            <button className="btn btn-primary" onClick={ () => { increment(2) } }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => { decrement(2) } }>-1</button>

        </>
    )

}
