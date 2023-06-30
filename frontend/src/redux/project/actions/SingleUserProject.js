import { FETCH_USER_PROJECTS_FAILURE, FETCH_USER_PROJECTS_REQUEST, FETCH_USER_PROJECTS_SUCCESS } from "../actionType/SingleUserProject";


export const fetchUserProjectsRequest = (userId) => ({
  type: FETCH_USER_PROJECTS_REQUEST,
  payload: {
    userId,
  },
});

export const fetchUserProjectsSuccess = (projects) => ({
  type: FETCH_USER_PROJECTS_SUCCESS,
  payload: {
    projects,
  },
});

export const fetchUserProjectsFailure = (error) => ({
  type: FETCH_USER_PROJECTS_FAILURE,
  payload: {
    error,
  },
});

export const fetchUserProjects = () => async (dispatch) => {
  dispatch(fetchUserProjectsRequest());
  const token = localStorage.getItem('token');
  try {
    const response = await fetch('http://localhost:3200/project/usersProjects',
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
    dispatch(fetchUserProjectsSuccess(projects));
  } catch (error) {
    dispatch(fetchUserProjectsFailure(error.message));
  }
};