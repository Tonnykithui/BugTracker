import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsKey } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import "./Login.css";
import Button from '../../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../../redux';
import Welcome from '../Welcome';
import { ToastContainer } from 'react-toastify';


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e, props) => {
        const loginData = {
            email,
            password
        }

       dispatch(loginThunk(loginData, redirectToHome));
    }

    const redirectToHome = () => {
        navigate('/')
    }

    return (
        <div className='login-wrapper'>
            <ToastContainer />
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
                            <input type="text" name="" id="" placeholder='email'
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                            />
                        </div>
                        <div className="login-input">
                            <span>
                                <BsKey />
                            </span>
                            <input type="password" name="" id="" placeholder='password'
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                        </div>
                        <div className="forgot-password">
                            <Link to='/forgot-password'><span>Forgot password</span></Link>
                        </div>
                    </div>
                    <div className='login-btn-div'>
                        <button className="login-button" onClick={() => handleSubmit()}><span><IoLogInOutline /></span>Login</button>
                    </div>
                    <div className="register-direction">
                        <p>Don't have an Account? <Link to='/register'><span>Sign Up</span></Link></p>
                    </div>
                </div>
                <Welcome />
            </div>
        </div>
    )
}

export default Login