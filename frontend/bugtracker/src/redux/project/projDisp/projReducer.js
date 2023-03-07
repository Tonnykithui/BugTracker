/* import {
  DISPATCH_PROJECT_TO_STATE,
  DISPATCH_PROJECT_TO_STATE_FAILURE,
  DISPATCH_PROJECT_TO_STATE_SUCCESS,
} from "./projTypes";

const initState = {
  loading: false,
  data: [],
  error: false,
};

const dispatchProjReducer = (state = initState, action) => {
  switch (action.type) {
    case DISPATCH_PROJECT_TO_STATE:
      return {
        ...state,
        loading: true,
        data: action.payload,
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

export default dispatchProjReducer;
 */
