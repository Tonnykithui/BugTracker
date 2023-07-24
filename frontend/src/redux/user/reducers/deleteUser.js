import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from "../actionType/deleteUser";

const initialState = {
    loading: false,
    error: null,
  };
  
  const userDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case DELETE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userDeleteReducer;