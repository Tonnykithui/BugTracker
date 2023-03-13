import React from 'react';
import { Link } from 'react-router-dom';
import { BsKey } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import "./Login.css";
import Button from '../../button/Button';


const Login = () => {
    return (
        <div className='login-wrapper'>
            <div className="login-screens">
                <div className="login">
                    <div className="login-message">
                        <h2>Login</h2>
                    </div>
                    <div className="login-form">
                        <div className="login-input">
                            <span>
                                <AiOutlineMail />
                            </span>
                            <input type="text" name="" id="" placeholder='email' />
                        </div>
                        <div className="login-input">
                            <span>
                                <BsKey />
                            </span>
                            <input type="text" name="" id="" placeholder='password' />
                        </div>
                        <div className="forgot-password">
                            <Link to='/forgot-password'><span>Forgot password</span></Link>
                        </div>
                    </div>
                    <div className='login-btn-div'>
                        <button className="login-button"><span><IoLogInOutline /></span>Login</button>
                    </div>
                    <div className="register-direction">
                        <p>Don't have an Account? <Link to='/register'><span>Sign Up</span></Link></p>
                    </div>
                </div>
                <div className="login-welcome"></div>
            </div>
        </div>
    )
}

export default Login