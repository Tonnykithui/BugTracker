import { CLOSE_BUG_ERR, CLOSE_BUG_SUC } from "../actionTypes/CloseBug";
import { OPEN_BUG_ERR, OPEN_BUG_REQ, OPEN_BUG_SUC } from "../actionTypes/ViewBug";

const initState = {
    loading: false,
    open: false
}

const bugOpenModalReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_BUG_REQ:
            return {
                ...state,
                loading: true
            }

        case OPEN_BUG_SUC:
            return {
                ...state,
                loading: false,
                open: true
            }

        case OPEN_BUG_ERR:
            return {
                ...state,
                loading: true
            }
        
        case CLOSE_BUG_ERR:
            return {
                ...state,
                loading:true
            }

        case CLOSE_BUG_SUC:
            return {
                ...state,
                loading: false,
                open: false
            }

        case CLOSE_BUG_ERR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default bugOpenModalReducer;