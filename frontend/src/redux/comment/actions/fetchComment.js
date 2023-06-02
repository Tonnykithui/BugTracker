import { FETCH_COMMENT_ERR, FETCH_COMMENT_REQ, FETCH_COMMENT_SUC } from "../actionTypes/fetchComment";

export const fetchCommentRequest = () => {
    return {
      type: FETCH_COMMENT_REQ,
    };
  };
  
  export const fetchCommentSuccess = (comments) => {
    return {
      type: FETCH_COMMENT_SUC,
      payload: comments,
    };
  };
  
  export const fetchCommentError = (error) => {
    return {
      type: FETCH_COMMENT_ERR,
      payload: error,
    };
  };

  export const fetchComments = () => {
    return async (dispatch) => {
      dispatch(fetchCommentRequest());
  
      try {
        // Perform the fetch comments request here
        const response = await fetch('https://api.example.com/comments');
  
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
  
        const comments = await response.json();
  
        dispatch(fetchCommentSuccess(comments));
      } catch (error) {
        dispatch(fetchCommentError(error.message));
      }
    };
  };
  