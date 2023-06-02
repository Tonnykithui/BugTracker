import { DELETE_BUG_ERR, DELETE_BUG_REQ, DELETE_BUG_SUC } from "../actionTypes/deleteBug";

const initState = {
    loading: false,
    error: '',
};

const bugDeleteReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_BUG_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case DELETE_BUG_SUC:
            return {
                ...state,
                loading: false,
                error: '',
            };
        case DELETE_BUG_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default bugDeleteReducer;