import { fetchSingleProject } from "../../project/actions/SingleProject";
import { UPDATE_BUG_ERR, UPDATE_BUG_REQ, UPDATE_BUG_SUC } from "../actionTypes/updateBug";

export const updateBugRequest = () => {
    return {
        type: UPDATE_BUG_REQ,
    };
};

export const updateBugSuccess = (bug) => {
    return {
        type: UPDATE_BUG_SUC,
        payload: bug,
    };
};

export const updateBugError = (error) => {
    return {
        type: UPDATE_BUG_ERR,
        payload: error,
    };
};

export const updateBug = (bugId, updatedBugData) => {
    return async (dispatch) => {
        dispatch(updateBugRequest());

        try {
            // Perform the update request here
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3200/bug/${bugId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(updatedBugData)
            });

            if (!response.ok) {
                throw new Error('Failed to update bug');
            }
            console.log(updatedBugData);
            // dispatch(dispatch(fetchSingleProject(updatedBugData.projectId)))
            const updatedBug = await response.json();

            dispatch(updateBugSuccess(updatedBug));
            // 
            // localStorage.removeItem('token');
        } catch (error) {
            dispatch(updateBugError(error.message));
        }
    };
};