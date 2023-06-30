import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS } from "../actionType/NewProject";

const initialState = {
    project: null,
    loading: false,
    error: null,
};

const addNewProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                project: action.payload,
                loading: false,
                error: null,
            };
        case CREATE_PROJECT_FAILURE:
            return {
                ...state,
                project: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};


export default addNewProjectReducer