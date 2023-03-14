import axios from 'axios';
import { CREATE_BUG, CREATE_BUG_ERROR, CREATE_BUG_SUCCESS } from "./actionType";

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

