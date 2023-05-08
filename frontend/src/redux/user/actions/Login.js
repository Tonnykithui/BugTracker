import { LOGGEDINSUC, LOGIN } from "../actionType/Login"
import * as axios from 'axios';

export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const userLoggedIn = data => {
    return {
        type: LOGGEDINSUC,
        payload: data
    }
}

export const loginThunk = ( data ) => {
    return async dispatch => {
        await axios.default.post('http://localhost:3200/auth/login', data)
        .then(res => {
            dispatch(login(res.data))
            return res.data
        })
        .catch(err => {
            throw err
        })
    }
}