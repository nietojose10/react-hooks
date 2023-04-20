import { useState } from "react"

//initialValue = 10
//si useCounter no recibe el parametro de initialVallue entonces el
//valor sera = 10
export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter( counter + value );
    }

    const decrement = (value = 1) => {

        if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        //En EmacScript6 es redundante y se puede obviar
        //counter: counter
        counter,
        increment,
        decrement,
        reset
    }

}