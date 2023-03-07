import {
  CREATE_PROJECT,
  CREATE_PROJECT_FAILURE,
  CREATE_PROJECT_SUCCESS,
} from "./projTypes";

const initState = {
  loading: false,
  success: "",
  error: "",
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
