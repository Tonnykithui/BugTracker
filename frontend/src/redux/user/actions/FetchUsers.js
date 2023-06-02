import { FETCH_USERS_ERR, FETCH_USERS_REQ, FETCH_USERS_SUC } from "../actionType/FetchUsers";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQ,
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUC,
        payload: users,
    };
};

export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERR,
        payload: error,
    };
};

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest());

        try {
            // Perform the fetch users request here
            const response = await fetch('http://localhost:3200/user');

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const users = await response.json();

            dispatch(fetchUsersSuccess(users));
        } catch (error) {
            dispatch(fetchUsersError(error.message));
        }
    };
};