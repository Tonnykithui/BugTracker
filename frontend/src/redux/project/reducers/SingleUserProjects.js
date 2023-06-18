import { FETCH_USER_PROJECTS_FAILURE, FETCH_USER_PROJECTS_REQUEST, FETCH_USER_PROJECTS_SUCCESS } from "../actionType/SingleUserProject";

const initialState = {
    projects: [],
    loading: false,
    error: null,
  };
  
  const userProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_PROJECTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USER_PROJECTS_SUCCESS:
        return {
          ...state,
          projects: action.payload.projects,
          loading: false,
          error: null,
        };
      case FETCH_USER_PROJECTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default userProjectsReducer;