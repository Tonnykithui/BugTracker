import { DELETE_PROJ_ERR, DELETE_PROJ_REQ, DELETE_PROJ_SUC } from "../actionType/DeleteProject";

const initState = {
    loading: false,
    error: '',
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_PROJ_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case DELETE_PROJ_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_PROJ_SUC:
            return {
                ...state,
                loading: false,
                error: '',
            };
        default:
            return state;
    }
};

export default projectReducer;