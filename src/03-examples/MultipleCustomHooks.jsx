import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${ counter }`);
    const { description, title } = !!data && data; 
    //Si la data tiene un valor entonces manda la data => !!undefined = false
    //Esto aplicaria en caso de que data venga como un arreglo

    return (
    <>

        <h1>FakeStore API Quotes</h1>
        <hr/>

        {

            isLoading
            ? <LoadingQuote/>
            : <Quote description={ description } title={ title } />

        }

        <button className="btn btn-primary" 
                disabled={ isLoading }
                onClick={() => {increment(1)}}
                >
            Next quote
        </button>
        


    </>
  )
}
