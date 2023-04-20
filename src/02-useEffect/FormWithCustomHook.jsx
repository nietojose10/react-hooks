import { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password:''
    });

    //const { username, email, password } = formState;

    //React recomienda utilizar useeffect que no esten muy cargados
    //pero podemos crear varios en caso de ser necesario.

    // useEffect( () => {

    //     //console.log('useEffect called!');

    // }, [] //Solo se ejecuta cuando el formulario es mountado por primera
    // );

    // useEffect( () => {

    //     //console.log('formState changed!');

    // }, [formState] 
    // );

    // useEffect( () => {

    //     //console.log('email changed!');

    // }, [email] 
    // );

    return (
        <>

            <h1>Formulario con custom Hook</h1>
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

            <input type="password" 
                                className="form-control mt-2"
                                placeholder="password"
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                        />

            <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>

        </>
    )
}
