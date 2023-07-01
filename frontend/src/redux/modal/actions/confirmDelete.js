import { CLOSE_BUG_DELETE_MODAL, OPEN_BUG_DELETE_MODAL } from "../actionTypes/ConfirmDelete";

export const openBugDeleteModal = (data, data2) => {
  return {
    type: OPEN_BUG_DELETE_MODAL,
    payload: {
      payload1:data,
      payload2:data2
    }
  };
};

export const closeBugDeleteModal = () => {
  return {
    type: CLOSE_BUG_DELETE_MODAL,
  };
};