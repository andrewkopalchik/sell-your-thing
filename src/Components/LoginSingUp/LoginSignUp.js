import React, { useState } from 'react';
import './LoginSignUp.css';


 
export const LoginSignUp = () => {

const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className = 'header'>
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
            <div className="inputs">
                <div className="input">
                    <img src="{user_icon}" placeholder='Name' alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src="{email_icon}" placeholder='Email id' alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src="{password_icon}" placeholder='Password' alt="" />
                    <input type="password" />
                </div>
            </div>
            
            <div className="forgot-password">Lost Password? <span>Click here!</span></div>
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

            </div>
        </div>

    </div>
  );
};

export default LoginSignUp;