import { CREATENEWPROJERR, CREATENEWPROJREQ, CREATENEWPROJSUC } from "../actionType/NewProject"
import * as axios from 'axios';

export const addNewProjectReq = () => {
    return {
        type: CREATENEWPROJREQ
    }
}

export const addNewProjectSuc = (data) => {
    return {
        type: CREATENEWPROJSUC,
        payload: data
    }
}

export const addNewProjectErr = (data) => {
    return {
        type: CREATENEWPROJERR,
        payload: data
    }
}

export const addNewProjectThunk = async (data) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        axios.default.post(
            'http://localhost:3200/PROJECT',
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then(data => {
                dispatch(addNewProjectSuc(data))
            })
            .catch(err => {
                dispatch(addNewProjectErr(err.mess))
            })
    }
}