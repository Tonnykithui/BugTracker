import { LOGGEDINSUC, LOGIN } from "../actionType/Login"
import * as axios from 'axios';
import { useNavigate } from 'react-router-dom';


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

export const loginThunk = (data, redirectToHome) => {
    return async dispatch => {
        await axios.default.post('http://localhost:3200/auth/login', data)
        .then(res => {
            if(res.status == 201){
                console.log(res.data.data);
                localStorage.setItem('token', res.data.data);
                redirectToHome();
                dispatch(login(res.data))
                return res.data;
            }
        })
        .catch(err => {
            throw err
        })
    }
}