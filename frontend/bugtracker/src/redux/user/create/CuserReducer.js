import {
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
} from "./CuserTypes";

const initialState = {
  loading: false,
  success: "",
  error: "",
};

const createNewUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case CREATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createNewUserReducer;
