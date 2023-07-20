// maincontext.jsx
import { createContext, useReducer } from "react";

export const MainContext = createContext({});

export const initialState = {
  todos: [],
  username: "",
};

const mainReducer = (state, action) => {
     
    
  switch (action.type) {
    case "SET_DATABASE":
        return {
          ...state,
          todos: action.payload,
        };
    case "SET_USERNAME":
      return { ...state, username: action.payload };

    default:
      return state;
  }
};

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
