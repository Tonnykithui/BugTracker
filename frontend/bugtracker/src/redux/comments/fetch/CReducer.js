import {
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
} from "./CActionType";

const initState = {
  loading: false,
  data: [],
  error: "",
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
