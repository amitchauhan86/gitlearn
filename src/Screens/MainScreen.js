import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const MainScreen = () => {
  const [tab , setTab] = useState('login')

    const tabHandler =(tabName)=>{
        setTab(tabName);
    }
  return (
    <div>
       <div className="parent-container">
      <div className="login-signup-tab">
      <button 
            className={`tab-button ${tab === 'login' ? 'active' : 'inactive'}`} 
            onClick={() => tabHandler('login')}
          >
            Login
          </button>
          <button 
            className={`tab-button ${tab === 'signup' ? 'active' : 'inactive'}`} 
            onClick={() => tabHandler('signup')}
          >
            Sign Up
          </button>
      </div>
      </div>
      {tab === 'login' && <Login />}
      {tab === 'signup' && <SignUp />}
    </div>
  );
};

export default MainScreen;
