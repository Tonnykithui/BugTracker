import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "./DuserTypes";

const initState = {
  loading: false,
  success: "",
  error: "",
};

const deleteUserReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default deleteUserReducer;
