import { v4 as uuid4 } from "uuid";
const intialState = {
  todos: [],
  sreachText: "",
  filterMethod: "ALL",
};

const todoReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDTODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuid4(),
            text: payload,
            completed: false,
            deletdStaus: false,
            onPermntlydeletdStaus: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((each) =>
          each.id === payload ? { ...each, completed: !each.completed } : each
        ),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, deletdStaus: true } : todo
        ),
      };

    case "SREACH_TODO":
      return {
        ...state,
        sreachText: payload,
      };
    case "TAB_SLECTION":
      return {
        ...state,
        filterMethod: payload,
      };

    default:
      return state;
  }
};
export default todoReducer;
