import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./FuserTypes";

export const fetchUser = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsersFromEnd = () => {
  return (dispatch) => {
    dispatch(fetchUser());
    axios
      .get("https://localhost:44346/api/users")
      .then((response) => {
        const data = response.data;
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.Message));
      });
  };
};
