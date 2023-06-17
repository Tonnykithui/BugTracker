import axios from 'axios';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../actionType/FetchUsersInProject';

// Action creators
export const fetchUsersNProjectRequest = () => ({
    type: FETCH_USERS_REQUEST,
});

export const fetchUsersNProjectSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersNProjectFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});

// Thunk action creator
export const fetchUsersInProject = (projectId) => {
    return (dispatch) => {
        dispatch(fetchUsersNProjectRequest());
        const token = localStorage.getItem('token')
        axios
            .get(
                `http://localhost:3200/project/${projectId}/users`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            )
            .then((response) => {
                const users = response.data;
                dispatch(fetchUsersNProjectSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUsersNProjectFailure(error.message));
            });
    };
};