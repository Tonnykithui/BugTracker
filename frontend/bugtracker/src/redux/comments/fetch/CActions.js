import {
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
} from "./CActionType";
import axios from "axios";

export const fetchComment = () => {
  return {
    type: FETCH_COMMENT_REQUEST,
  };
};

export const fetchCommentSuccess = (success) => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: success,
  };
};

export const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENT_FAILURE,
    payload: error,
  };
};

export const fetchCommentThunk = (id) => {
  return (dispatch) => {
    dispatch(fetchComment());
    axios
      .get(`https://localhost:44346/api/tickets/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchCommentSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCommentFailure(error.Message));
      });
  };
};
