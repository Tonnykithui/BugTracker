import {
    FETCH_PENDING_TICKETS_REQUEST,
    FETCH_PENDING_TICKETS_SUCCESS,
    FETCH_PENDING_TICKETS_FAILURE,
} from '../actionTypes/pendingBug';

const initialState = {
    pendingTickets: [],
    loading: false,
    error: null,
};

const pendingTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PENDING_TICKETS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PENDING_TICKETS_SUCCESS:
            return {
                ...state,
                pendingTickets: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_PENDING_TICKETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default pendingTicketsReducer;