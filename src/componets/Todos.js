import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Navigate } from "react-router-dom";
const todos = [
  {
    id: 1,
    text: "Complete assignment",
    status: false,
  },
  {
    id: 2,
    text: "Buy groceries",
    status: false,
  },
  {
    id: 3,
    text: "Call a friend",
    status: true,
  },

  {
    id: 4,
    text: "Go for a run",
    status: false,
  },
  {
    id: 5,
    text: "Read a book",
    status: true,
  },
];

console.log(todos);

const Todos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const token =localStorage.getItem("token")
  if (token===undefined) {
    <Navigate to="/login" replace={true} />
  }
  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
        </div>
      ))}
      <button onClick={onLogoutHandler}>Logout</button>
    </div>
  );
};

export default Todos;
