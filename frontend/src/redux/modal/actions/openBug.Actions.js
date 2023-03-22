import { OPEN_BUG_ERR, OPEN_BUG_REQ, OPEN_BUG_SUC } from "../actionTypes/ViewBug"

export const openBugReq = () => {
    return {
        type: OPEN_BUG_REQ
    }
}

export const openBugSuccess = () => {
    return {
        type: OPEN_BUG_SUC
    }
}

export const openBugErr = () => {
    return {
        type: OPEN_BUG_ERR
    }
}