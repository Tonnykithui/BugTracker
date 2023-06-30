import * as actionTypes from './projectActionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER_TO_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.ADD_USER_TO_PROJECT_SUCCESS:
            const { userId, projectId } = action.payload;
            return {
                ...state,
                users: [...state.users, { userId, projectId }],
                loading: false,
                error: null
            };
        case actionTypes.ADD_USER_TO_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default projectReducer;