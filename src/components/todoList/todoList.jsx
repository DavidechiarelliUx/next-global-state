import React, { useContext, useState } from 'react';
import { todoReducer } from "@/reducers/todoReducer"
import { TodoContext } from '../../context/todoContext';
import styles from './TodoList.module.scss';

const TodoList = () => {
  const { state, addTodo, removeTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: newTodo,
        completed: false
      });
      setNewTodo('');
    }
  };

  const handleRemove = id => {
    removeTodo(id);
  };

  return (
    <div>
        <ul className={styles['todo-list']}>
        {state.map(todo => (
            <li
            key={todo.id}
            className={`${styles['todo-item']} ${todo.completed ? styles.completed : styles['not-completed']}`}
            >
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Completed' : 'Not Completed'}</span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </li>
        ))}
        </ul>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Add new todo..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>
    </div>
  );
};

export default TodoList;
