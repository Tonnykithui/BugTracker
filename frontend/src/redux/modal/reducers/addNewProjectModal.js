import { CREATENEWPROJECTMODALERR, CREATENEWPROJECTMODALREQ, CREATENEWPROJECTMODALSUC } from "../actionTypes/AddProject";
import { CLOSE_BUG_SUC } from "../actionTypes/CloseBug";

const initState = {
    loading: false,
    child: '',
    open: false
}

export const addNewProjectModalReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATENEWPROJECTMODALREQ:
            return {
                ...state,
                loading: true
            }

        case CREATENEWPROJECTMODALSUC:
            return {
                ...state,
                loading: false,
                child: action.payload,
                open: true
            }
            
        case CREATENEWPROJECTMODALERR:
            return {
                ...state
            }

        case  CLOSE_BUG_SUC:
            return {
                ...state,
                open: false,
                child: ''
            }

        default:
            return state;
    }
}