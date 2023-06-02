import { CREATE_COMMENT_ERR, CREATE_COMMENT_REQ, CREATE_COMMENT_SUC } from "../actionTypes/createComment";

const initState = {
    loading: false,
    comment: null,
    error: '',
};

const commentCreateReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_COMMENT_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case CREATE_COMMENT_SUC:
            return {
                ...state,
                loading: false,
                comment: action.payload,
                error: '',
            };
        case CREATE_COMMENT_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentCreateReducer;