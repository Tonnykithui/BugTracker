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

const initialState = {
  editUser: false,
  editUserData: {},
  confirmDelete: false,
  confirmUserData: {},
  addNewUser: false,
  addProject: false,
  editProject: false,
  editProjectData: {},
  addTicket: false,
  editTicket: false,
  editTicketData: {},
};

const buttonToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USER_EDIT:
      return {
        ...state,
        editUser: true,
        editUserData: action.payload,
      };

    case CLOSE_USER_EDIT:
      return {
        ...state,
        editUser: false,
        editUserData: {},
      };

    case SHOW_DELETE_CONFIRM:
      return {
        ...state,
        confirmDelete: true,
        confirmUserData: action.payload,
      };

    case CLOSE_DELETE_CONFIRM:
      return {
        ...state,
        confirmDelete: false,
        confirmUserData: {},
      };

    case SHOW_ADD_NEW_USER:
      return {
        ...state,
        addNewUser: true,
      };

    case CLOSE_ADD_NEW_USER:
      return {
        ...state,
        addNewUser: false,
      };

    case SHOW_PROJECT_MODAL:
      return {
        ...state,
        addProject: true,
      };

    case HIDE_PROJECT_MODAL:
      return {
        ...state,
        addProject: false,
      };

    case SHOW_EDIT_PROJECT:
      return {
        ...state,
        editProject: true,
        editProjectData: action.payload,
      };

    case HIDE_EDIT_PROJECT:
      return {
        ...state,
        editProjectData: {},
        editProject: false,
      };

    case SHOW_TICKET_MODAL:
      return {
        ...state,
        addTicket: true,
      };

    case HIDE_TICKET_MODAL:
      return {
        ...state,
        addTicket: false,
      };

    case SHOW_TICKET_MODAL_EDIT:
      return {
        ...state,
        editTicket: true,
        editTicketData: action.payload,
      };

    case HIDE_TICKET_MODAL_EDIT:
      return {
        ...state,
        editTicket: false,
        editTicketData: {},
      };

    default:
      return state;
  }
};

export default buttonToggleReducer;
