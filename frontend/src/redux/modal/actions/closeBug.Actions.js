import { CLOSE_BUG_ERR, CLOSE_BUG_REQ, CLOSE_BUG_SUC } from "../actionTypes/CloseBug"

export const closeBugReq = () => {
    return {
        type: CLOSE_BUG_REQ
    }
}

export const closeBugSuccess = () => {
    return {
        type: CLOSE_BUG_SUC
    }
}

export const closeBugErr = () => {
    return {
        type: CLOSE_BUG_ERR
    }
}