import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import './LoginSignUp.css';

export const LoginSignUp = () => {

const [action, setAction] = useState("Sign Up");
// const [isLoggedIn, setLoggedIn] = useState(false);

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

// const history = useHistory();
 
// const handleLogin = () => {
//     if (username === 'admin' && password === 'admin'){
//         setLoggedIn(true);
//         history.push('/adminpanel');
//     }
// };

const user_icon = AccountCircleIcon;
const email_icon = EmailIcon;
const password_icon = PasswordIcon;


  return (
    <div className='container'>
        <div className = 'header'>
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
            <div className="inputs">
                <div className="input">
                    <SvgIcon className='icon_login' component={user_icon} placeholder='Name' alt="" />
                    <input type="text" placeholder='Username' value={username} on onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <SvgIcon className='icon_login' component={email_icon} placeholder='Email id' alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                <SvgIcon className='icon_login' component={password_icon} placeholder='Password' alt="" />
                    <input type="password" placeholder='Password' value={password} on onChange={(e)=> setPassword(e.target.value)}/>
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