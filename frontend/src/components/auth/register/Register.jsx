import React, { useState } from 'react'
import "./Register.css";
import Button from '../../button/Button';
import "../login/Login.css";
import { Link } from 'react-router-dom';
import { registerSchema } from '../Validations/RegisterValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const registerSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            name,
            email,
            password,
            confirmPassword
        }

        const formDataCorrect = await registerSchema.isValid(formData);
        console.log('CHECKING DATA IS CLEAN', formDataCorrect);
    }

    return (
        <div className="register">
            <div className='register-screens'>
                <div className="register-message">
                    <h2>Create Account</h2>
                </div>
                <div className="register-form">
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='name' value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </div>
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='email' value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='password' value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                    <div className="register-input">
                        <input type="text" name="" id="" placeholder='confirm password' value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                        />
                    </div>
                    <div className='register-btn-div'>
                        <Button
                            style={{ background: "blue", borderRadius: '5px', padding: '5px', color: 'white' }}
                            onClick={(e) => registerSubmit(e)}
                        >
                            Sign Up
                        </Button>
                        <Link to='/login'>
                            <Button
                                style={{ borderRadius: '5px', padding: '5px', color: 'red', width: '100%', border: '2px solid red' }}
                            >
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