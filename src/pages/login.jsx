// login.jsx
// src/pages/login.jsx
import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { MainContext } from "@/reducers";

const Login = () => {
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(MainContext);
  const router = useRouter();

  const handleLogin = () => {
  
    dispatch({ type: "SET_USERNAME", payload: username });
    router.push("/"); 
  }

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

export default Login;
