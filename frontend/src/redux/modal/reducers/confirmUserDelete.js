import { CLOSE_USER_DELETE_MODAL, OPEN_USER_DELETE_MODAL } from "../actionTypes/confirmUserDelete";

const initialState = {
    modalOpen: false,
    child: '',
    user:''
};

const confirmUserDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_USER_DELETE_MODAL:
            return {
                ...state,
                modalOpen: true,
                // child: action.payload.payload1,
                user: action.payload.payload
            };
        case CLOSE_USER_DELETE_MODAL:
            return {
                ...state,
                modalOpen: false,
                child:'',
                user: ''
            };
        default:
            return state;
    }
};

export default confirmUserDeleteReducer;