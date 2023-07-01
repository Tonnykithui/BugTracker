import { CLOSE_BUG_DELETE_MODAL, OPEN_BUG_DELETE_MODAL } from "../actionTypes/ConfirmDelete";

const initialState = {
    modalOpen: false,
    child: '',
    bug:''
};

const confirmBugDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_BUG_DELETE_MODAL:
            return {
                ...state,
                modalOpen: true,
                child: action.payload.payload1,
                bug: action.payload.payload2
            };
        case CLOSE_BUG_DELETE_MODAL:
            return {
                ...state,
                modalOpen: false,
                child:'',
                bug: ''
            };
        default:
            return state;
    }
};

export default confirmBugDeleteReducer;