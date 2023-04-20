import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({description, title}) => {
    
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
    
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });

    }, [description])

    return (
        <>
            <blockquote className="blockquoute text-end" 
                        style={{ display: 'flex' }}
            >
                <p ref={ pRef } className="mb-1">{ description }</p>
                <footer className="blockquote-footer mt-1"> { title } </footer>
            </blockquote>

            <code>
                { JSON.stringify(boxSize) }
            </code>
        </>
            

    )
        
}
