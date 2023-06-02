import { REGISTER_USER_ERR, REGISTER_USER_REQ, REGISTER_USER_SUC } from "../actionType/CreateUser";

const initState = {
    loading: false,
    user: null,
    error: '',
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQ:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case REGISTER_USER_SUC:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: '',
            };
        case REGISTER_USER_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;