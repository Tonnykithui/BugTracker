import { FETCH_SINGLE_USER_FAILURE, FETCH_SINGLE_USER_REQUEST, FETCH_SINGLE_USER_SUCCESS } from "../actionType/FetchSingleUser";

export const fetchSingleUserRequest = () => ({
    type: FETCH_SINGLE_USER_REQUEST,
});

export const fetchSingleUserSuccess = (user) => ({
    type: FETCH_SINGLE_USER_SUCCESS,
    payload: user,
});

export const fetchSingleUserFailure = (error) => ({
    type: FETCH_SINGLE_USER_FAILURE,
    payload: error,
});

export const fetchSingleUser = (userId) => {
    return (dispatch) => {
        dispatch(fetchSingleUserRequest());
        let token = localStorage.getItem('token')
        fetch(
            `http://localhost:3200/project/user/${userId}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                // On successful response, dispatch success action
                dispatch(fetchSingleUserSuccess(data));
            })
            .catch((error) => {
                // On error, dispatch failure action
                dispatch(fetchSingleUserFailure(error.message));
            });
    };
};