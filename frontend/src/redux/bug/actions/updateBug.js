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
            const response = await fetch(`https://api.example.com/bugs/${bugId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBugData),
            });

            if (!response.ok) {
                throw new Error('Failed to update bug');
            }

            const updatedBug = await response.json();

            dispatch(updateBugSuccess(updatedBug));
        } catch (error) {
            dispatch(updateBugError(error.message));
        }
    };
};