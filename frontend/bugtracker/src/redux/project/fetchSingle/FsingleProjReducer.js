import {
  FETCH_SINGLE_PROJECT_REQUEST,
  FETCH_SINGLE_PROJECT_SUCCESS,
  FETCH_SINGLE_PROJECT_FAILURE,
} from "./FsingleTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchSingleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_SINGLE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchSingleProjectReducer;
