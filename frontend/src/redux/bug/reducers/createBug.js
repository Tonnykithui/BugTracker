import { CREATE_BUG, CREATE_BUG_ERROR, CREATE_BUG_SUCCESS } from "./actionType";

const init = {
    loading: true,
    data: [],
    error: ''
}


const addBugReducer = (state = init, action) => {
    switch (action.type) {
        case CREATE_BUG:
            return {
                ...state,
                data: loading
            }
        case CREATE_BUG_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case CREATE_BUG_ERROR:
            return {
                ...state,
                data: action.payload
            }
        default:
            break;
    }
}

export default addBugReducer;