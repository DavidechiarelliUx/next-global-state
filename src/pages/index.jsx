import React, { useState, useContext, useLayoutEffect } from "react";
import { TodoProvider } from "../context/todoContext";
import TodoList from "../components/todoList";
import { todoReducer } from "@/reducers/todoReducer";
import { MainContext } from "@/reducers";
import Login from "./login";
import {db} from "@/plugins/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"; 

export default function Home ({data}) {

  useLayoutEffect(() => {
    dispatch({ type: "SET_DATABASE", payload: data });
  }, []);




  const { state, dispatch } = useContext(MainContext);
  console.log(data)
  return (
    <TodoProvider>
      {state.username ? (
        <div>
          <h1>Todo List</h1>
          <TodoList />
        </div>
      ) : (
        <Login />
      )}
    </TodoProvider>
  );
};

export async function getServerSideProps(context) {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "todoList"));

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      data,
    },
  };
}



