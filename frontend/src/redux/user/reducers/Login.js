import { LOGGEDINSUC, LOGIN } from "../actionType/Login";

const initialState = {
    isAuthenticated: false,
    user: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isAuthenticated: true,
                user: action.payload
            };

        case LOGGEDINSUC:
            return {
                isAuthenticated: true,
                user: action.payload
            }
        default:
            return state;
    }
};