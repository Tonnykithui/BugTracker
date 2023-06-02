import { FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS } from "../actionType/SingleProject";

const initialState = {
  loading: false,
  project: null,
  error: ''
};

const projectSingleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload,
        error: ''
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        project: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default projectSingleReducer;