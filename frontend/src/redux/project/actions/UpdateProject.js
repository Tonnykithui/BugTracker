import { closeBugSuccess } from "../../modal/actions/closeBug.Actions";
import { UPDATE_PROJ_ERR, UPDATE_PROJ_REQ, UPDATE_PROJ_SUC } from "../actionType/UpdateProject";
import { fetchSingleProject } from "./SingleProject";

export const updateProjectRequest = () => {
    return {
        type: UPDATE_PROJ_REQ,
    };
};

export const updateProjectSuccess = (projectData) => {
    return {
        type: UPDATE_PROJ_SUC,
        payload: projectData,
    };
};

export const updateProjectError = (error) => {
    return {
        type: UPDATE_PROJ_ERR,
        payload: error,
    };
};

export const updateProject = (projectId, updatedData) => {
    return async (dispatch) => {
        dispatch(updateProjectRequest());
        const token = localStorage.getItem('token');
        try {
            // Perform the update request here
            const response = await fetch(`http://localhost:3200/project/${projectId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Failed to update project');
            }

            const projectData = await response.json();

            dispatch(fetchSingleProject(projectId))
            dispatch(closeBugSuccess())
            dispatch(updateProjectSuccess(projectData));
        } catch (error) {
            dispatch(updateProjectError(error.message));
        }
    };
};