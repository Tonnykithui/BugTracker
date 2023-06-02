import { UPDATE_BUG_ERR, UPDATE_BUG_REQ, UPDATE_BUG_SUC } from "../actionTypes/updateBug";

const initState = {
    loading: false,
    bug: null,
    error: '',
};

const bugUpdateReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_BUG_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case UPDATE_BUG_SUC:
            return {
                ...state,
                loading: false,
                bug: action.payload,
                error: '',
            };
        case UPDATE_BUG_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default bugUpdateReducer;