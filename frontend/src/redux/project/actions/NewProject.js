import { closeBugSuccess } from '../../modal/actions/closeBug.Actions';
import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS } from '../actionType/NewProject';
import * as axios from 'axios';
import { fetchProject } from './FetchProject';


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
        axios.default.post(
            'http://localhost:3200/PROJECT',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then(data => {
                dispatch(createProjectSuccess(data))
                dispatch(fetchProject())
                dispatch(closeBugSuccess())
            })
            .catch(err => {
                dispatch(createProjectFailure(err.mess))
            })
    }
}