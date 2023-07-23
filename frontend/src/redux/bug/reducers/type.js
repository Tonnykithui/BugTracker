import { FETCH_TICKET_TYPES_FAILURE, FETCH_TICKET_TYPES_REQUEST, FETCH_TICKET_TYPES_SUCCESS } from "../actionTypes/type";

const initialState = {
    ticketTypes: [],
    loading: false,
    error: null,
};

const ticketTypesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKET_TYPES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_TICKET_TYPES_SUCCESS:
            return {
                ...state,
                loading: false,
                ticketTypes: action.payload,
                error: null,
            };
        case FETCH_TICKET_TYPES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ticketTypesReducer;