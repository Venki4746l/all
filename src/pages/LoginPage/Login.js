import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { loginAut } from "../../Redux/Actions/LoginActions";
import {  useNavigate,Navigate} from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();
  
  const navigate = useNavigate();
  const atustaus = useSelector((state) => state.login.loginStaus);
  console.log(atustaus);
 
  const token = localStorage.getItem("token");
  if (token!==undefined) {
            <Navigate to="/" replace={true} />
          }
    
  //checking the token already exited in the locaStorage or not
 

  //redirect to login page after sucffuly login the user
  useEffect(() => {
    

    if (atustaus) {
      navigate("/");
    } 
  }, [navigate,atustaus]);

  //on submit handler
  const onSubmitHadler = (e) => {
    e.preventDefault();
    const creditainals = {
      username: userName,
      password: password,
    };
    dispacth(loginAut(creditainals));
  };

  return (
    <div>
      <form onSubmit={onSubmitHadler} className="formContainer">
        <div className="form-group">
          <label htmlFor="inputUsername">Useranme</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            id="inputUsername"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            id="inputPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
      <div>
        <p> username: mor_2314</p>
        <p> password: 83r5^_</p>
      </div>
    </div>
  );
};

export default Login;
