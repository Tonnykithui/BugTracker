import axios from 'axios';
import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  CLEAR_SINGLE_PROJECT
} from '../actionType/SingleProject';

export const fetchSingleProjectRequest = () => ({
  type: FETCH_PROJECT_REQUEST
});

export const fetchSingleProjectSuccess = (project) => ({
  type: FETCH_PROJECT_SUCCESS,
  payload: project
});

export const fetchSingleProjectFailure = (error) => ({
  type: FETCH_PROJECT_FAILURE,
  payload: error
});

export const clearResourceSingleProject = () => ({
  type: CLEAR_SINGLE_PROJECT
})

export const fetchSingleProject = (projectId) => {
  return (dispatch) => {
    dispatch(fetchSingleProjectRequest());
    const token = localStorage.getItem('token');
    axios.get(
      `http://localhost:3200/project/${projectId}`,
      {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    )
      .then((response) => {
        const project = response.data;
        dispatch(fetchSingleProjectSuccess(project));
      })
      .catch((error) => {
        dispatch(fetchSingleProjectFailure(error.message));
      });
  };
};