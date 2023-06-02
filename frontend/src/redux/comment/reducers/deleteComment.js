import { DELETE_COMMENT_ERR, DELETE_COMMENT_REQ, DELETE_COMMENT_SUC } from "../actionTypes/deleteComment";

const initState = {
    loading: false,
    error: '',
};

const commentDeleteReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_COMMENT_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case DELETE_COMMENT_SUC:
            return {
                ...state,
                loading: false,
                error: '',
            };
        case DELETE_COMMENT_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentDeleteReducer;