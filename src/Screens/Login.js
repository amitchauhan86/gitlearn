import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginScreen from "../image/login-screen.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("./main");
      console.log('Login successful');
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };



  return (
    <div className="center-container">
      <div className="container container-main " id="container">
        <div className="form-container sign-in-container">
          <div className="form-handel">
            <h1 className="heading">Login</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" 
             value={email}
             onChange={(e) => {
              setEmail(e.target.value)
              setError("")
            }}
            />
            <input type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError("")
            }}
            />
            <p ></p>
            <button className="Sign-in mb-2" onClick={handleLogin}>Sign In</button>
            <p style={{color:"red"}}>{error}</p>
          </div>
        </div>
        <div className="overlay-container">
      
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="heading">Welcome Back!</h1>
              <p className="paraga">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
           
            <div className="overlay-panel overlay-right">
              <img alt="loginScreen" src={loginScreen} height={350} width={350}/>
             
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
