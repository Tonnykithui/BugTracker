import { ADDNEWUSERERR, ADDNEWUSERREQ, ADDNEWUSERSUC, CLOSENEWUSERMODAL } from "../actionTypes/AddUser";
import { CLOSE_BUG_SUC } from "../actionTypes/CloseBug";

export const initState = {
    loading: false,
    open: false,
    child: ''
}

export const addUserToProjReducer = (state = initState, action) => {
    switch (action.type) {
        case ADDNEWUSERREQ:
            return {
                ...state,
                loading: true
            }

        case ADDNEWUSERSUC:
            return {
                ...state,
                open: true,
                child: 'addNewUserToProj'
            }

        case ADDNEWUSERERR:
            return {
                ...state,
                open: false,
                child: ''
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