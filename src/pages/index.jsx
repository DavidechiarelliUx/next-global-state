import React, { useState, useContext } from "react";
import { TodoProvider } from "../context/todoContext";
import TodoList from "../components/todoList";
import { MainContext } from "@/reducers";

const Login = () => {
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(MainContext);

  const handleLogin = () => {
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Home = () => {
  const { state } = useContext(MainContext);

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

export default Home;


