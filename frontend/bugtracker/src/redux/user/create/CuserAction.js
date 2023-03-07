import axios from "axios";
import { fetchUsersFromEnd } from "../..";
import {
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
} from "./CuserTypes";

export const createUser = (user) => {
  return {
    type: CREATE_USER,
  };
};

export const createUserSuccess = (success) => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
  };
};

export const createNewUser = (user) => {
  return (dispatch) => {
    dispatch(createUser(user));
    axios
      .post("https://localhost:44346/api/auth/register", user)
      .then((response) => {
        const data = response.data;
        dispatch(createUserSuccess(data));
        dispatch(fetchUsersFromEnd());
      })
      .catch((error) => {
        dispatch(createUserFailure(error.Message));
      });
  };
};
