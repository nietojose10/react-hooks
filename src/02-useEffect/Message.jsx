import { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
  
    useEffect(() => {
      //console.log('Message Mounted');
      
      //Para remover tenemos que hacer referencia al espacio en memoria
      //que esta definida mi funcion
        const onMouseMove = ({ x, y }) => {
            ///const coords = { x, y };
            setCoords({ x, y });

        }


      window.addEventListener('mousemove', onMouseMove );

      return () => {
        //console.log('Message Unmounted');
        window.removeEventListener('mousemove', onMouseMove );

      }
    }, []);
    

    return (
        <>

            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) }

        </>
    )
}
