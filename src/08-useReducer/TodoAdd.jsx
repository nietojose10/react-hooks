import { useState } from "react"

export const TodoAdd = ({ onNewTodo = {} }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {

        setinputValue(target.value);

    }

    const onResetForm = () => {

        setinputValue('');

    }    

    const onSubmit = ( event ) => {

        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description: inputValue,
            done: false,
        }

        //console.log({ id: new Date(), description:{ inputValue }, done: false })
        onNewTodo( newTodo );
        //console.log(inputValue);

        onResetForm();
    }


  return (

        <form onSubmit={ onSubmit } aria-label="form">
            
            <input 
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                value={inputValue}
                onChange={(event) => { onInputChange(event) } }
            />
            <button
                type="submit"
                //onClick={ (event) => { onSubmit(event) } }
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>

  )
}
