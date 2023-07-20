import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "@/reducers";
import styles from "@/styles/login.module.scss";
import { signInWithPopup } from "firebase/auth";
// import { Auth } from "firebase/auth";

import { auth, provider} from "@/plugins/firebaseConfig";


const Login = () => {
//     signInWithPopup(auth, provider)
// console.log(auth)
 
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { dispatch } = useContext(MainContext);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: input });
    router.push("/");
  };
  const handleLogin = () => {
    const user = {
      username,
      email,
    };
    dispatch({ type: "SET_USERNAME", payload: user });
  };
  const onHandleGoogleAuth = async () => {
    const res = await signInWithPopup(auth, provider);

    dispatch({ type: "SET_USERNAME", payload: res.user.email });
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isConfirmed}
          onChange={(e) => setIsConfirmed(e.target.checked)}
        />
        Confirm
      </label>
      <button onClick={ onHandleGoogleAuth}>Accedi con Google</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
