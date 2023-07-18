import React, { createContext, useReducer } from 'react';
import { todoReducer } from "@/reducers/todoReducer"
import { todoData } from '../mocks/todoData';

const TodoContext = createContext();


const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, todoData);

  const addTodo = todo => {
    const newTodo = { id: Date.now(), ...todo };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <TodoContext.Provider value={{ state, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
