import { CLEAR_RESOURCE } from "../actionTypes/clearBug";
import { FETCH_SINGLE_BUG_FAILURE, FETCH_SINGLE_BUG_REQUEST, FETCH_SINGLE_BUG_SUCCESS } from "../actionTypes/fetchSingleBug";

const initialState = {
    bug: null,
    loading: false,
    error: null,
};

const bugSingleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_BUG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SINGLE_BUG_SUCCESS:
            return {
                ...state,
                loading: false,
                bug: action.payload,
            };
        case FETCH_SINGLE_BUG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_RESOURCE:
            return {
                ...initialState
            }
            
        default:
            return state;
    }
};

export default bugSingleReducer;