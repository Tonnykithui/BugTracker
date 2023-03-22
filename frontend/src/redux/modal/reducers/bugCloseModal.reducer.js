import { CLOSE_BUG_ERR, CLOSE_BUG_REQ, CLOSE_BUG_SUC } from "../actionTypes/CloseBug"

const initState = {
    loading: false,
    open: false
}

const bugCloseModalReducer = (state = initState, action) => {
    switch (action.type) {
        case CLOSE_BUG_REQ:
            return {
                ...state,
                loading: true
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
                loading: true
            }
            
        default:
            return state;
    }
}

export default bugCloseModalReducer;