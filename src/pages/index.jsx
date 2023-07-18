import Head from 'next/head'
import React from 'react';
import { TodoProvider } from '../context/todoContext';
import TodoList from '../components/todoList';

import styles from '@/styles/Home.module.scss'

const Home = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Home;
