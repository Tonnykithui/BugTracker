import { CREATENEWPROJECTMODALERR, CREATENEWPROJECTMODALREQ, CREATENEWPROJECTMODALSUC } from "../actionTypes/AddProject"

export const createNewProjectModalReq = () => {
    return {
        type: CREATENEWPROJECTMODALREQ
    }
}

export const createNewProjectModalSuc = () => {
    return {
        type: CREATENEWPROJECTMODALSUC
    }
}

export const createNewProjectModalErr = () => {
    return {
        type: CREATENEWPROJECTMODALERR
    }
}