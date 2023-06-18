import { FETCH_USER_TICKETS_FAILURE, FETCH_USER_TICKETS_REQUEST, FETCH_USER_TICKETS_SUCCESS } from "../actionTypes/singleBugsForUser";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
  };
  
  const userTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_TICKETS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USER_TICKETS_SUCCESS:
        return {
          ...state,
          loading: false,
          tickets: action.payload,
        };
      case FETCH_USER_TICKETS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userTicketsReducer