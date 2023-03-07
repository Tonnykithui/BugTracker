import {
  DISPATCH_PROJECT_TO_STATE,
  DISPATCH_PROJECT_TO_STATE_FAILURE,
  DISPATCH_PROJECT_TO_STATE_SUCCESS,
  FETCH_PROJECT,
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_SUCCESS,
} from "./FprojTypes";

const initState = {
  loading: false,
  data: [],
  error: "",
  ticketData: [],
  success: "",
};

const fetchProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        ticketData: [],
      };

    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //SINGLE PROJECT
    case DISPATCH_PROJECT_TO_STATE:
      return {
        ...state,
        loading: true,
        ticketData: action.payload,
      };

    case DISPATCH_PROJECT_TO_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case DISPATCH_PROJECT_TO_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchProjectReducer;
