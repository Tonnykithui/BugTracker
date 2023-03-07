import axios from "axios";
import { fetchUsersFromEnd } from "../..";
import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./UuserTypes";

export const updateUser = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = (success) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: success,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const updateUserDetails = (id, user) => {
  return (dispatch) => {
    dispatch(updateUser());
    axios
      .put(`https://localhost:44346/api/users/${id}`, user)
      .then((response) => {
        const data = response.data;
        dispatch(updateUserSuccess(data));
        dispatch(fetchUsersFromEnd());
      })
      .catch((error) => {
        dispatch(updateUserFailure(error.Message));
      });
  };
};
