import { REGISTER_USER_ERR, REGISTER_USER_REQ, REGISTER_USER_SUC } from "../actionType/CreateUser";

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

export const registerUserError = (error) => {
    return {
        type: REGISTER_USER_ERR,
        payload: error,
    };
};

export const createUser = (userData) => {
    return async (dispatch) => {
        dispatch(registerUserRequest());

        try {
            // Perform the create user request here
            const response = await fetch('http://localhost:3200/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const newUser = await response.json();

            dispatch(registerUserSuccess(newUser));
        } catch (error) {
            dispatch(registerUserError(error.message));
        }
    };
};