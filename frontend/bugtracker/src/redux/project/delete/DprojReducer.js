import {
  DELETE_PROJECT,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_SUCCESS,
} from "./DprojTypes";

const initState = {
  loading: false,
  success: "",
  error: "",
};

const deleteProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_PROJECT:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteProjectReducer;
