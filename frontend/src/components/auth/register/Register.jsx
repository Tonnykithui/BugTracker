import React from 'react'
import "./Register.css";
import Button from '../../button/Button';
import "../login/Login.css";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">
            <div className='register-screens'>
                <div className="register-message">
                    <h2>Create Account</h2>
                </div>
                <div className="register-form">
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='name' />
                    </div>
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='email' />
                    </div>
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='password' />
                    </div>
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='confirm password' />
                    </div>
                    <div className='register-btn-div'>
                        <Button style={{ background: "blue", borderRadius: '5px', padding: '5px', color: 'white' }}>Sign Up</Button>
                        <Link to='/login'>
                            <Button style={{ borderRadius: '5px', padding: '5px', color: 'red', width:'100%', border:'2px solid red'}}>
                                Sign In
                            </Button>
                        </Link>


                    </div>
                </div>
            </div>
            <div className="login-welcome"></div>
        </div>
    )
}

export default Register