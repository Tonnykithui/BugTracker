import {
    CLOSE_BUG_FORM,
    CLOSE_BUG_FORM_ERR,
    CLOSE_BUG_FORM_SUC, 
    OPEN_BUG_FORM, 
    OPEN_BUG_FORM_ERR, 
    OPEN_BUG_FORM_SUC
} from "../actionTypes/CreateBug"


export const openBugForm = () => {
    return {
        type: OPEN_BUG_FORM
    }
}

export const openBugFormSuc = () => {
    return {
        type: OPEN_BUG_FORM_SUC
    }
}


export const openBugFormErr = () => {
    return {
        type: OPEN_BUG_FORM_ERR
    }
}

export const closeBugForm = () => {
    return {
        type: CLOSE_BUG_FORM
    }
}

export const closeBugFormSuc = () => {
    return {
        type: CLOSE_BUG_FORM_SUC
    }
}

export const closeBugFormErr = () => {
    return {
        type: CLOSE_BUG_FORM_ERR
    }
}