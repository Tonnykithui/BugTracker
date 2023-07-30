import { FETCH_SINGLE_USER_FAILURE, FETCH_SINGLE_USER_REQUEST, FETCH_SINGLE_USER_SUCCESS } from "../actionType/FetchSingleUser";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case FETCH_SINGLE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default singleUserReducer;