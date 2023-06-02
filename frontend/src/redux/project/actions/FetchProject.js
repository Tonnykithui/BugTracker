import { FETCH_PROJECT_ERR, FETCH_PROJECT_REQ, FETCH_PROJECT_SUC } from "../actionType/FetchProject";

export const fetchProjectRequest = () => {
    return {
      type: FETCH_PROJECT_REQ,
    };
  };
  
  export const fetchProjectSuccess = (projectData) => {
    return {
      type: FETCH_PROJECT_SUC,
      payload: projectData,
    };
  };
  
  export const fetchProjectError = (error) => {
    return {
      type: FETCH_PROJECT_ERR,
      payload: error,
    };
  };


  export const fetchProject = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_PROJECT_REQ });
  
      try {
        const response = await fetch('http://localhost:3200/project');
        const projectData = await response.json();
  
        dispatch({ type: FETCH_PROJECT_SUC, payload: projectData });
      } catch (error) {
        dispatch({ type: FETCH_PROJECT_ERR, payload: error.message });
      }
    };
  };