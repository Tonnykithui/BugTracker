import { DELETE_COMMENT_ERR, DELETE_COMMENT_REQ, DELETE_COMMENT_SUC } from "../actionTypes/deleteComment";

export const deleteCommentRequest = () => {
    return {
        type: DELETE_COMMENT_REQ,
    };
};

export const deleteCommentSuccess = (commentId) => {
    return {
        type: DELETE_COMMENT_SUC,
        payload: commentId,
    };
};

export const deleteCommentError = (error) => {
    return {
        type: DELETE_COMMENT_ERR,
        payload: error,
    };
};

export const deleteComment = (ticketId, commentId) => {
    return async (dispatch) => {
        dispatch(deleteCommentRequest());
        const token = localStorage.getItem('token');
        try {
            // Perform the delete comment request here
            const response = await fetch(`http://localhost:3200/bug/${ticketId}/comments/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }

            });

            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }

            dispatch(deleteCommentSuccess(commentId));
        } catch (error) {
            dispatch(deleteCommentError(error.message));
        }
    };
};