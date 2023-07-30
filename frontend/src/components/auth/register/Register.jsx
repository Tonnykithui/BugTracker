import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Register.css'
import Button from '../../button/Button';
import "../login/Login.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from '../Welcome';

const Register = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const dispatch = useDispatch();

    const validationSchema = yup.object().shape({
        firstname: yup.string().required('First name is required'),
        lastname: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        phone: yup.string(),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        const isResolved = await validationSchema.isValid(data)
        if (isResolved) {
            dispatch(createUser(data));
        }
    };

    return (
        <div className="register">
            <ToastContainer />
            <div className='register-screens'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="register-message">
                        <h2>Create Account</h2>
                    </div>
                    <div className="register-form">
                        <div className='flex flex-row'>
                            <div className="register-input">
                                <input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    {...register('firstname')}
                                    type="text" placeholder='First name'
                                />
                                <p>{errors.firstname?.message}</p>
                            </div>
                            <div className="register-input">
                                <input
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    {...register('lastname')}
                                    type="text" placeholder='Last name'
                                />
                                <p>{errors.lastname?.message}</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className="register-input">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    {...register('email')}
                                    type="text" placeholder='Email'
                                />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="register-input">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    {...register('phone')}
                                    type="text" placeholder='phone'
                                />
                                <p>{errors.phone?.message}</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className="register-input">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    {...register('password')}
                                    type="password" placeholder='Password'
                                />
                                <p>{errors.password?.message}</p>
                            </div>
                            <div className="register-input">
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    {...register('confirmPassword')}
                                    type="password" placeholder='Confirm password'
                                />
                                <p>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>
                        <div className='register-btn-div'>
                            <Button
                                style={{ background: "blue", borderRadius: '5px', padding: '5px', color: 'white' }}
                                onClick={(e) => onSubmit(e)}
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
                </form>
            </div>
            <Welcome />
        </div>
    );
};

export default Register;