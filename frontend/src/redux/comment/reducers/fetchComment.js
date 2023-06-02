import { FETCH_COMMENT_ERR, FETCH_COMMENT_REQ, FETCH_COMMENT_SUC } from "../actionTypes/fetchComment";

const initState = {
    loading: false,
    comments: [],
    error: '',
};

const commentFetchReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_COMMENT_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case FETCH_COMMENT_SUC:
            return {
                ...state,
                loading: false,
                comments: action.payload,
                error: '',
            };
        case FETCH_COMMENT_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentFetchReducer;