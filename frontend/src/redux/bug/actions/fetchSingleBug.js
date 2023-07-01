import { FETCH_SINGLE_BUG_FAILURE, FETCH_SINGLE_BUG_REQUEST, FETCH_SINGLE_BUG_SUCCESS } from "../actionTypes/fetchSingleBug";
import { CLEAR_RESOURCE } from '../actionTypes/clearBug';

export const fetchSingleBugRequest = () => ({
  type: FETCH_SINGLE_BUG_REQUEST,
});

export const fetchSingleBugSuccess = (bug) => ({
  type: FETCH_SINGLE_BUG_SUCCESS,
  payload: bug,
});

export const fetchSingleBugFailure = (error) => ({
  type: FETCH_SINGLE_BUG_FAILURE,
  payload: error,
});

export const clearResource = () => {
  return {
    type: CLEAR_RESOURCE
  }
}

export const fetchSingleBug = (bugId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSingleBugRequest());
      const token = localStorage.getItem('token');
      // Make the API request to fetch the bug
      const response = await fetch(
        `http://localhost:3200/bug/${bugId}`,
        {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
      );
      const data = await response.json();

      // Check if the response was successful
      if (response.ok) {
        dispatch(fetchSingleBugSuccess(data));
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      dispatch(fetchSingleBugFailure(error.message));
    }
  };
};