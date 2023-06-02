import { FETCH_PROJECT_ERR, FETCH_PROJECT_REQ, FETCH_PROJECT_SUC } from "../actionType/FetchProject";

const initState = {
    loading: false,
    data: [],
    err: ''
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PROJECT_REQ:
            return {
                ...state,
                loading: true,
                err: ''
            };
        case FETCH_PROJECT_SUC:
            return {
                ...state,
                loading: false,
                data: action.payload,
                err: ''
            };
        case FETCH_PROJECT_ERR:
            return {
                ...state,
                loading: false,
                err: action.payload
            };
        default:
            return state;
    }
};

export default projectReducer;