import { FETCH_USERS_ERR, FETCH_USERS_REQ, FETCH_USERS_SUC } from "../actionType/FetchUsers";

const initState = {
    loading: false,
    users: [],
    error: '',
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case FETCH_USERS_SUC:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default usersFetchReducer;