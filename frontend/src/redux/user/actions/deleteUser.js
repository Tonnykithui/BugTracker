import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from "../actionType/deleteUser";
import { fetchUsers } from "./FetchUsers";

export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST,
});

// Action creator for successful delete user
export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId,
});

// Action creator for failed delete user
export const deleteUserFailure = (error) => ({
    type: DELETE_USER_FAILURE,
    payload: error,
});

export const deleteUser = (userId) => {
    return async (dispatch) => {
        let token = localStorage.getItem('token')
        dispatch(deleteUserRequest());
        try {
            const response = await fetch(`http://localhost:3200/user/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            await fetch(
                `http://localhost:3200/bug/${userId}/user`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            dispatch(deleteUserSuccess(userId));
            dispatch(fetchUsers())
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };
};