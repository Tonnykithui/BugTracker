import { closeBugDeleteModal } from "../../modal/actions/confirmDelete";
import { fetchSingleProject } from "../../project/actions/SingleProject";
import { DELETE_BUG_ERR, DELETE_BUG_REQ, DELETE_BUG_SUC } from "../actionTypes/deleteBug";

export const deleteBugRequest = () => {
  return {
    type: DELETE_BUG_REQ,
  };
};

export const deleteBugSuccess = () => {
  return {
    type: DELETE_BUG_SUC,
  };
};

export const deleteBugError = (error) => {
  return {
    type: DELETE_BUG_ERR,
    payload: error,
  };
};

export const deleteBug = (bugId, bugProjectId) => {
  return async (dispatch) => {
    dispatch(deleteBugRequest());

    const token = localStorage.getItem('token');

    try {
      // Perform the delete request here
      const response = await fetch(`http://localhost:3200/bug/${bugId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete bug');
      }

      dispatch(deleteBugSuccess());
      dispatch(fetchSingleProject(bugProjectId))
      dispatch(closeBugDeleteModal())
    } catch (error) {
      dispatch(deleteBugError(error.message));
    }
  };
};