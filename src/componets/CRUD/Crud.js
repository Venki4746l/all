import React, { useState } from "react";
import "./Crud.css";
import {
  addTodo,
  deleteTodo,
  setActiveTab,
  sreachTodo,
  toggleTodo,
} from "../../Redux/Actions/CrudActions";
import { useDispatch, useSelector } from "react-redux";

const Crud = () => {
  const [inputTodo, setInputTodo] = useState("");
  const todosData = useSelector((state) => state.todos.todos);
  const filterText = useSelector((state) => state.todos.filterMethod);
  const [activeButton, setActiveButton] = useState("ALL");
  const sreachTextinput = useSelector((state) => state.todos.sreachText);
  


  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputTodo));
    setInputTodo("");
  };

  //toogle
  const onToggleCheckHandler = (id) => {
    dispatch(toggleTodo(id));
  };
  //dleted
  const onDletedTodoHanlder = (id, status) => {
    console.log(status)
    if (status) {
      dispatch(setActiveTab("DELETE_TODO_COMPLTEDLY"));
      
      
    } else {
      dispatch(deleteTodo(id));
    }
  };

  //on sreach handler for every single key storke
  const onSreachHandler = (e) => {
    dispatch(sreachTodo(e.target.value));
  };

  //display  the data using filterData function
  const filtterData = () => {
    if (filterText === "ALL") {
      const data = todosData.filter((todo) => !todo.deletdStaus && todo);
      return data;
    } else if (filterText === "REAMING") {
      const data = todosData.filter(
        (todo) => !todo.deletdStaus && !todo.completed
      );
      return data;
    } else if (filterText === "COMPLETED") {
      const data = todosData.filter(
        (todo) => !todo.deletdStaus && todo.completed
      );
      return data;
    } else if (filterText === "DELETED") {
      const data = todosData.filter((todo) => todo.deletdStaus === true);
      return data;
    } 
    
  };

  //calling the function for code return
  const finalData = filtterData();

  //sreach filiter function on evry state
  const sreachFilterData =
    finalData &&
    finalData.filter((todo) =>
      todo.text.toLowerCase().includes(sreachTextinput.toLowerCase())
    );

  return (
    <div>
      <form className="m-3" onSubmit={onSubmitHandler}>
        <input
          value={inputTodo}
          placeholder="Add todo"
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button className="btn btn-success m-2" type="text">
          submit
        </button>
      </form>
      <div className="m-3">
        <p>sreach application</p>
        <input
          type="text"
          placeholder="satrt sreach"
          value={sreachTextinput}
          onChange={(e) => onSreachHandler(e)}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          className={`tab ${activeButton === "ALL" ? "active" : ""}`}
          onClick={() => {
            setActiveButton("ALL");
            dispatch(setActiveTab("ALL"));
          }}
        >
          ALL
        </button>
        <button
          className={`tab ${activeButton === "REAMING" ? "active" : ""}`}
          onClick={() => {
            setActiveButton("REAMING");
            dispatch(setActiveTab("REAMING"));
          }}
        >
          Remaing
        </button>
        <button
          className={`tab ${activeButton === "COMPLETED" ? "active" : ""}`}
          onClick={() => {
            setActiveButton("COMPLETED");
            dispatch(setActiveTab("COMPLETED"));
          }}
        >
          completed
        </button>
        <button
          className={`tab ${activeButton === "DELETED" ? "active" : " "}`}
          onClick={() => {
            setActiveButton("DELETED");
            dispatch(setActiveTab("DELETED"));
          }}
        >
          Deleted
        </button>
      </div>
      <div>
        {finalData &&
          sreachFilterData.map((todo) => (
            <div className="todoscontainer " key={todo.id}>
              <input
                className="checkBox"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleCheckHandler(todo.id)}
              />
              <p
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  color: todo.completed ? "white" : "dark",
                }}
                className="todoText"
              >
                {todo.text}
              </p>
              {/* <button onClick={()=>onEditHandler(todo)}>Edit</button> */}

             {!todo.deletdStaus? <button
                className="btn btn-danger m-2"
                onClick={() => onDletedTodoHanlder(todo.id)}
              >
                delete
              </button>: <button
                className="btn btn-danger m-2"
                onClick={() => onDletedTodoHanlder(todo.id)}
              >
                permrntly
              </button>}
            </div>
          ))}
        <div>
          {finalData.length === 0 ? (
            <h1 className="text-start fs-1">no items</h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Crud;
