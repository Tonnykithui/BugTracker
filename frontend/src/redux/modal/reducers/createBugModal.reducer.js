import { CLOSE_BUG_SUC } from "../actionTypes/CloseBug"
import { CLOSE_BUG_FORM, CLOSE_BUG_FORM_ERR, CLOSE_BUG_FORM_SUC, OPEN_BUG_FORM, OPEN_BUG_FORM_ERR, OPEN_BUG_FORM_SUC } from "../actionTypes/CreateBug"

const initState = {
    loading: false,
    open: false,
    child: ''
}

const createBugOpenModalReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_BUG_FORM:
            return {
                ...state,
                child: 'createBug',
                loading: true
            }

        case OPEN_BUG_FORM_SUC:
            return {
                ...state,
                loading: false,
                child: 'createBug',
                open: true
            }

        case OPEN_BUG_FORM_ERR:
            return {
                ...state,
                child: 'createBug',
                loading: true
            }

        case CLOSE_BUG_SUC:
            return {
                ...state,
                open: false,
                child: ''
            }
 
        default:
            return state;
    }
}

export default createBugOpenModalReducer;