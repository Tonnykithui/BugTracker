import { CREATENEWPROJERR } from "../actionType/NewProject";

const initState = {
    loading: false,
    data: [],
    err: ''
}

const addNewProjectReducer = ( state = initState, action ) => {
    switch (action.type) {
        case CREATENEWPROJERR:
            return {
                ...state,
                loading: true
            }
            break;
    
        default:
            return state;
    }
}

export default addNewProjectReducer