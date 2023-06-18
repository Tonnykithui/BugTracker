import { OTHER_FETCH_USER_PROJECTS_FAILURE, OTHER_FETCH_USER_PROJECTS_REQUEST, OTHER_FETCH_USER_PROJECTS_SUCCESS } from "../actionType/OtherUserProjects";

const initialState = {
    projects: [],
    loading: false,
    error: null,
};

const OtherUserProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OTHER_FETCH_USER_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case OTHER_FETCH_USER_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.payload.projects,
                loading: false,
                error: null,
            };
        case OTHER_FETCH_USER_PROJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default OtherUserProjectsReducer;