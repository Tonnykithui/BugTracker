import { DELETE_PROJ_ERR, DELETE_PROJ_REQ, DELETE_PROJ_SUC } from "../actionType/DeleteProject";

export const deleteProjectRequest = () => {
    return {
        type: DELETE_PROJ_REQ,
    };
};

export const deleteProjectError = (error) => {
    return {
        type: DELETE_PROJ_ERR,
        payload: error,
    };
};

export const deleteProjectSuccess = () => {
    return {
        type: DELETE_PROJ_SUC,
    };
};

export const deleteProject = (projectId) => {
    return async (dispatch) => {
        dispatch(deleteProjectRequest());

        try {
            // Perform the delete request here
            const response = await fetch(`http://localhost:3200/project/${projectId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete project');
            }

            dispatch(deleteProjectSuccess());
        } catch (error) {
            dispatch(deleteProjectError(error.message));
        }
    };
};