import {
  UPDATE_PROJECT,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_SUCCESS,
} from "./UprojTypes";

const initState = {
  loading: false,
  success: "",
  error: "",
};

const updateProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default updateProjectReducer;
