import { closeNewUserModal } from "../../modal/actions/addUser.Action";
import { ADD_USER_TO_PROJECT_FAILURE, ADD_USER_TO_PROJECT_REQUEST, ADD_USER_TO_PROJECT_SUCCESS } from "../actionType/AddUserToProject";
import { fetchUsersInProject } from "./FetchUsersInProject";

export const addUserToProjectRequest = () => {
    return {
        type: ADD_USER_TO_PROJECT_REQUEST
    };
};

export const addUserToProjectSuccess = (userId, projectId) => {
    return {
        type: ADD_USER_TO_PROJECT_SUCCESS,
        payload: {
            userId,
            projectId
        }
    };
};

export const addUserToProjectFailure = (error) => {
    return {
        type: ADD_USER_TO_PROJECT_FAILURE,
        payload: error
    };
};

export const addUserToProject = (userId, projectId) => {
    return async (dispatch) => {
        dispatch(addUserToProjectRequest());
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3200/project/${projectId}/user/${userId}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ userId, projectId })
            });
            dispatch(addUserToProjectSuccess(userId, projectId));
            dispatch(fetchUsersInProject(projectId))

            if (response.ok) {
                dispatch(closeNewUserModal());
            } else {
                const errorData = await response.json();
                dispatch(addUserToProjectFailure(errorData.message));
            }
        } catch (error) {
            dispatch(addUserToProjectFailure(error.message));
        }
    };
};