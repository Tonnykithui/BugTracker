import { REGISTER_USER_ERR, REGISTER_USER_REQ, REGISTER_USER_SUC } from "../actionType/CreateUser";

const initState = {
    loading: false,
    user: null,
    error: null,
    status: null
};

const userCreateReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQ:
            return {
                ...state,
                loading: true,
                status: 200
            };
        case REGISTER_USER_SUC:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case REGISTER_USER_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload1,
                status: action.payload2
            };
        default:
            return state;
    }
};

export default userCreateReducer;