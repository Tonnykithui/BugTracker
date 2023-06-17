import axios from 'axios';
import { CREATE_BUG, CREATE_BUG_ERROR, CREATE_BUG_SUCCESS } from '../actionTypes/createBug';
import { OPEN_BUG_ERR } from '../../modal/actionTypes/ViewBug';
import { OPEN_BUG_FORM_ERR, OPEN_BUG_FORM_SUC } from '../../modal/actionTypes/CreateBug';

export const createBugReq = () => {
    return {
        type: CREATE_BUG
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

// export const openBugForm = () => {
//     return {
//         type: OPEN_BUG_ERR
//     }
// }

// export const openBugFormSuc = () => {
//     return {
//         type: OPEN_BUG_FORM_SUC
//     }
// }


// export const openBugFormErr = () => {
//     return {
//         type: OPEN_BUG_FORM_ERR
//     }
// }

export const createBugThunk = (bugData) => {
    return (dispatch) => {
      dispatch(createBugReq());
      const token = localStorage.getItem('token');
      axios
        .post(
          'http://localhost:3200/bug',
          bugData,
          {
            headers: {
              'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        })
        .then((res) => {
          dispatch(createBugSuc(res.data));
        })
        .catch((err) => {
          dispatch(createBugErr(err.message));
        });
    };
  };

// export const createBugThunk = async (data) => {
//     return (dispatch) => {
//         dispatch(createBugReq);
//         axios.post('http://localhost:3200/bug', data)
//             .then(res => {
//                 dispatch(res.data);
//             })
//             .catch(err => {
//                 return err.Message;
//             })
//     }
// }