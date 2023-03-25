import axios from 'axios';
import { OPEN_BUG_ERR } from '../modal/actionTypes/ViewBug';
import { CREATE_BUG, CREATE_BUG_ERROR, CREATE_BUG_SUCCESS, OPEN_BUG_FORM_ERR, OPEN_BUG_FORM_SUC } from "./actionType";

export const createBugReq = (data) => {
    return {
        type: CREATE_BUG,
        payload: data,
    }
}

export const createBugSuc = (success) => {
    return {
        type: CREATE_BUG_SUCCESS,
        payload: success
    }
}

export const createBugErr = error => {
    return {
        type: CREATE_BUG_ERROR,
        payload: error
    }
}

export const openBugForm = () => {
    return {
        type: OPEN_BUG_ERR
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

export const createBugThunk = dispatch => {
    return dispatch => {
        dispatch(createBugReq);
        axios.post('http://localhost:3200/bug', data)
            .then(res => {
                dispatch(res.data);
            })
            .catch(err => {
                console.log(err);
                return err.Message;
            })
    }
}

