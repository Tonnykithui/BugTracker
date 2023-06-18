import { OTHER_FETCH_USER_PROJECTS_FAILURE, OTHER_FETCH_USER_PROJECTS_REQUEST, OTHER_FETCH_USER_PROJECTS_SUCCESS } from "../actionType/OtherUserProjects";

export const fetchOtherUserProjectsRequest = (userId) => ({
    type: OTHER_FETCH_USER_PROJECTS_REQUEST,
    payload: {
        userId,
    },
});

export const fetchOtherUserProjectsSuccess = (projects) => ({
    type: OTHER_FETCH_USER_PROJECTS_SUCCESS,
    payload: {
        projects,
    },
});

export const fetchOtherUserProjectsFailure = (error) => ({
    type: OTHER_FETCH_USER_PROJECTS_FAILURE,
    payload: {
        error,
    },
});

export const fetchOtherUserProjects = (userId) => async (dispatch) => {
    dispatch(fetchOtherUserProjectsRequest(userId));
    const token = localStorage.getItem('token');
    console.log(userId)
    try {
        const response = await fetch(
            `http://localhost:3200/PROJECT/usersprojects/${userId}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch user projects');
        }
        const projects = await response.json();
        dispatch(fetchOtherUserProjectsSuccess(projects));
    } catch (error) {
        dispatch(fetchOtherUserProjectsFailure(error.message));
    }
};