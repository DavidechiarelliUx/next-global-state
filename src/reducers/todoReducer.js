export const todoReducer = (state, action) => {

    switch (action.type) {
      case "SET_DATABASE":
      return {
        ...state,
        todos: action.payload,
      };
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'REMOVE_TODO':
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };
  