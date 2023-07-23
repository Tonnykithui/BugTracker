import { FETCH_TICKETS_PRIORITY_FAILURE, FETCH_TICKETS_PRIORITY_REQUEST, FETCH_TICKETS_PRIORITY_SUCCESS } from "../actionTypes/ticketPriority";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
};

const ticketPrioritytReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_PRIORITY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_TICKETS_PRIORITY_SUCCESS:
            return {
                ...state,
                loading: false,
                tickets: action.payload,
                error: null,
            };
        case FETCH_TICKETS_PRIORITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ticketPrioritytReducer;