import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
    const [formState, setformState] = useState({
        username: 'jose.nieto',
        email: 'jose.nieto@google.com'
    });


    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });


    }


    //React recomienda utilizar useeffect que no esten muy cargados
    //pero podemos crear varios en caso de ser necesario.

    useEffect( () => {

        //console.log('useEffect called!');

    }, [] //Solo se ejecuta cuando el formulario es mountado por primera
    );

    useEffect( () => {

        //console.log('formState changed!');

    }, [formState] 
    );

    useEffect( () => {

        //console.log('email changed!');

    }, [email] 
    );

    return (
        <>

            <h1>Formulario Simple</h1>
            <hr/>

            <input type="text" 
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={ username }
                    onChange={ onInputChange }
            />
            
            <input type="email" 
                    className="form-control mt-2"
                    placeholder="jose.nieto@google.com"
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
            />


            {
                (username === 'jose.nieto2') && <Message/>
            }

        </>
    )
}
