import { closeBugSuccess } from '../../modal/actions/closeBug.Actions';
import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS } from '../actionType/NewProject';
import * as axios from 'axios';
import { fetchProject } from './FetchProject';
import { toast } from 'react-toastify';


export const createProjectRequest = () => ({
    type: CREATE_PROJECT_REQUEST,
});

export const createProjectSuccess = (project) => ({
    type: CREATE_PROJECT_SUCCESS,
    payload: project,
});

export const createProjectFailure = (error) => ({
    type: CREATE_PROJECT_FAILURE,
    payload: error,
});


export const addNewProjectThunk = (data) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        try {
            let resp = await fetch(
                'http://localhost:3200/PROJECT',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify(data)
                }
            ).then((response) => {
                dispatch(createProjectSuccess(data.data))
                dispatch(fetchProject())
                dispatch(closeBugSuccess())
                return response.json();
            })
            if (resp.ok) {
                toast('Successfully created a roject')
            } 
        } catch (error) {
            dispatch(createProjectFailure(error.mess))
            console.log('ERROR FROM CREATING PROJET', error);
            toast(error.mess)
        }

    }
}

// .then(data => {
//     dispatch(createProjectSuccess(data.data))
//     console.log('DATA FROM JSON RESPONSE', data.data)
//     dispatch(fetchProject())
//     dispatch(closeBugSuccess())
// })
// .catch(err => {
//     dispatch(createProjectFailure(err.mess))
//     console.log('ERROR FROM CREATING PROJET', err);
//     toast(err.mess)
// })
// .then((data) => {
            //     console.log(data);
            // }).catch(error => {
            //     console.error('Fetch error:', error);
            //   })
            // let respData = resp.json();
            // dispatch(createProjectSuccess(respData))
            // dispatch(fetchProject())
            // console.log('RESP', respData)
            // dispatch(closeBugSuccess())
            // if (!resp.ok) {
            //     toast(resp)
            // } 
            // else {
            //     // dispatch(createProjectFailure(error.mess))
            //     // console.log('ERROR FROM CREATING PROJET', error);

            // }