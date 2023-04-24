import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodos = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || [] );
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify( todos ) );
    
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
            
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
    
        dispatch( action );
    
    }
    
    const handleDeleteTodo = ( id ) => {
    
        dispatch({
            type: '[TODO Remove Todo]',
            payload: id
        });
    
    }
    
    const handleToggleTodo = ( id ) => {
    
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    
    }

  return {

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    initialState,
    init,
    dispatch,
    todos,
    todosCount: todos.length,
    todosPending: todos.filter(todo => !todo.done).length,

  };
}
