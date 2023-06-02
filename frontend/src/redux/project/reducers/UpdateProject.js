import { UPDATE_PROJ_ERR, UPDATE_PROJ_REQ, UPDATE_PROJ_SUC } from "../actionType/UpdateProject";

const initState = {
    loading: false,
    project: null,
    error: ''
};

const projectUpdateReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_PROJ_REQ:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case UPDATE_PROJ_SUC:
            return {
                ...state,
                loading: false,
                project: action.payload,
                error: ''
            };
        case UPDATE_PROJ_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default projectUpdateReducer;