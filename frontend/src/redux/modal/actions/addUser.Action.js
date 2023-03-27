import { ADDNEWUSERERR, ADDNEWUSERREQ, ADDNEWUSERSUC, CLOSENEWUSERMODAL } from "../actionTypes/AddUser"
import { CLOSE_BUG_SUC } from "../actionTypes/CloseBug"

export const addNewUserToProjReq = () => {
    return {
        type: ADDNEWUSERREQ
    }
}

export const addNewUserToProjSuc = () => {
    return {
        type: ADDNEWUSERSUC
    }
}

export const addNewUserToProjErr = () => {
    return {
        type: ADDNEWUSERERR
    }
}

export const closeNewUserModal = () => {
    return {
        type: CLOSE_BUG_SUC
    }
}
