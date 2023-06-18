import { OTHER_FETCH_USER_TICKETS_FAILURE, OTHER_FETCH_USER_TICKETS_REQUEST, OTHER_FETCH_USER_TICKETS_SUCCESS } from "../actionTypes/OtherUserBug";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
  };
  
  const OtherUserTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
      case OTHER_FETCH_USER_TICKETS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case OTHER_FETCH_USER_TICKETS_SUCCESS:
        return {
          ...state,
          tickets: action.payload.tickets,
          loading: false,
          error: null,
        };
      case OTHER_FETCH_USER_TICKETS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default OtherUserTicketsReducer;