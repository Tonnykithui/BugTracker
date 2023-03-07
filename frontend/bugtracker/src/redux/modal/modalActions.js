import {
  CLOSE_ADD_NEW_USER,
  CLOSE_DELETE_CONFIRM,
  CLOSE_USER_EDIT,
  HIDE_EDIT_PROJECT,
  HIDE_PROJECT_MODAL,
  HIDE_TICKET_MODAL,
  HIDE_TICKET_MODAL_EDIT,
  SHOW_ADD_NEW_USER,
  SHOW_DELETE_CONFIRM,
  SHOW_EDIT_PROJECT,
  SHOW_PROJECT_MODAL,
  SHOW_TICKET_MODAL,
  SHOW_TICKET_MODAL_EDIT,
  SHOW_USER_EDIT,
} from "./modalType";

export const showEditUser = (user) => {
  return {
    type: SHOW_USER_EDIT,
    payload: user,
  };
};

export const hideEditUser = () => {
  return {
    type: CLOSE_USER_EDIT,
  };
};

export const showConfirm = (user) => {
  return {
    type: SHOW_DELETE_CONFIRM,
    payload: user,
  };
};

export const hideConfirm = () => {
  return {
    type: CLOSE_DELETE_CONFIRM,
  };
};

export const showAddNew = () => {
  return {
    type: SHOW_ADD_NEW_USER,
  };
};

export const hideAddNew = () => {
  return {
    type: CLOSE_ADD_NEW_USER,
  };
};

export const showProjectModal = () => {
  return {
    type: SHOW_PROJECT_MODAL,
  };
};

export const hideProjectModal = () => {
  return {
    type: HIDE_PROJECT_MODAL,
  };
};

export const showEditProject = (project) => {
  return {
    type: SHOW_EDIT_PROJECT,
    payload: project,
  };
};

export const hideEditProject = () => {
  return {
    type: HIDE_EDIT_PROJECT,
  };
};

export const showTicketModal = () => {
  return {
    type: SHOW_TICKET_MODAL,
  };
};

export const hideTicketModal = () => {
  return {
    type: HIDE_TICKET_MODAL,
  };
};

export const showTicketModalEdit = (ticket) => {
  return {
    type: SHOW_TICKET_MODAL_EDIT,
    payload: ticket,
  };
};

export const hideTicketModalEdit = () => {
  return {
    type: HIDE_TICKET_MODAL_EDIT,
  };
};
