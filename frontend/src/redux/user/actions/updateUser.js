import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actionType/updateUser";
import { ToastContainer, toast } from 'react-toastify';
import { fetchUsers } from "./FetchUsers";

export const updateUserRequest = () => ({
    type: UPDATE_USER_REQUEST,
});

// Action creator for successful update user
export const updateUserSuccess = (userData) => ({
    type: UPDATE_USER_SUCCESS,
    payload: userData,
});

// Action creator for failed update user
export const updateUserFailure = (error) => ({
    type: UPDATE_USER_FAILURE,
    payload: error,
});

export const updateUserDetails = (userId, updatedData) => {
    return async (dispatch) => {
        let token = localStorage.getItem('token')
        dispatch(updateUserRequest());
        try {
            const response = await fetch(`http://localhost:3200/user/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token

                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            } else {
                toast('Successfully updated a the user')
            }

            const updatedUser = await response.json();
            dispatch(updateUserSuccess(updatedUser));
            dispatch(fetchUsers());
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };
};