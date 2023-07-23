import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from "../actionTypes/ticketsStatus";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
  };
  
  const ticketStatusReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TICKETS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TICKETS_SUCCESS:
        return {
          ...state,
          loading: false,
          tickets: action.payload,
          error: null,
        };
      case FETCH_TICKETS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ticketStatusReducer;