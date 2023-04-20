import { useState } from "react"

export const CounterApp = () => {
  
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter: {state.counter1} </h1>
            <h1>Counter: {state.counter2} </h1>
            <h1>Counter: {state.counter3} </h1>

            <hr />

            <button className="btn" 
            onClick={ () => setCounter({
                // counter1: state.counter1 + 1,
                // counter2: state.counter2,
                // counter3: state.counter3,
                ...state,
                counter1: state.counter1 + 1
            }) 
            }
            >+1</button>

        </>
        
    )
}
