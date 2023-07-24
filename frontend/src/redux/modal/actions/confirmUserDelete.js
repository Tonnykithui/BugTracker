import { CLOSE_USER_DELETE_MODAL, OPEN_USER_DELETE_MODAL } from "../actionTypes/confirmUserDelete";

export const openUserDeleteModal = (data, data2) => {
    return {
        type: OPEN_USER_DELETE_MODAL,
        payload: {
            payload: data
            // payload2: data2
        }
    };
};

export const closeUserDeleteModal = () => {
    return {
        type: CLOSE_USER_DELETE_MODAL,
    };
};

