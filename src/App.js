import React from "react";
import Login from "./pages/LoginPage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./componets/Todos";
import Carsoul from "./componets/Carsoul";
import Sorting from "./componets/Sorting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Todos />} />
        <Route exact path="/carsoul" element={<Carsoul />} />
        <Route exact path="/sorting" element={<Sorting />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
