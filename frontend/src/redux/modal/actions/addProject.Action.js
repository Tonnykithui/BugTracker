import { CREATENEWPROJECTMODALERR, CREATENEWPROJECTMODALREQ, CREATENEWPROJECTMODALSUC } from "../actionTypes/AddProject"

export const createNewProjectModalReq = () => {
    return {
        type: CREATENEWPROJECTMODALREQ
    }
}

export const createNewProjectModalSuc = (data) => {
    return {
        type: CREATENEWPROJECTMODALSUC,
        payload: data
    }
}

export const createNewProjectModalErr = () => {
    return {
        type: CREATENEWPROJECTMODALERR
    }
}