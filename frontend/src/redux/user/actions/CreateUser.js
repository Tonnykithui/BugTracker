import { REGISTER_USER_ERR, REGISTER_USER_REQ, REGISTER_USER_SUC } from "../actionType/CreateUser";
import { ToastContainer, toast } from 'react-toastify'

export const registerUserRequest = () => {
    return {
        type: REGISTER_USER_REQ,
    };
};

export const registerUserSuccess = (user) => {
    return {
        type: REGISTER_USER_SUC,
        payload: user,
    };
};

export const registerUserError = (error1, error2) => {
    return {
        type: REGISTER_USER_ERR,
        payload1: error1,
        payload2: error2
    };
};

export const createUser = (userData) => {
    return async (dispatch) => {
        dispatch(registerUserRequest());
        // Perform the create user request here
        const response = await fetch('http://localhost:3200/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((resp) => {
                dispatch(registerUserSuccess(resp));
                if (resp.status == 201) {
                    toast('Successfully registered as a new User');

                }
                return resp.json()
                // console.log(resp.json())
            })

        if (!response.ok) {
            toast(response.message);
            dispatch(registerUserError(response.message, response.statusCode));
        }
    };
};

// .catch((err) => {
            //     console.log(err);
            //     dispatch(registerUserError(err.message, response.status));
            //     // throw err.message
            // });
 // if(response.error == 200){
            //     toast(response.message)
            // }

            // const newUser = await response.json(); 