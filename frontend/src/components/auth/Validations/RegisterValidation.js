import * as yup from 'yup';


export const registerSchema = yup.object().shape({
    firstname: yup.string().required('Name is required'),
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(4)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .min(4)
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});
