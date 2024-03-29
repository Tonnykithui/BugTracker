import { CREATE_COMMENT_ERR, CREATE_COMMENT_REQ, CREATE_COMMENT_SUC } from "../actionTypes/createComment";

export const createCommentRequest = () => {
    return {
        type: CREATE_COMMENT_REQ,
    };
};

export const createCommentSuccess = (comment) => {
    return {
        type: CREATE_COMMENT_SUC,
        payload: comment,
    };
};

export const createCommentError = (error) => {
    return {
        type: CREATE_COMMENT_ERR,
        payload: error,
    };
};

export const createComment = (bugId, name) => {
    return async (dispatch) => {
        dispatch(createCommentRequest());
        const token = localStorage.getItem('token');
        try {
            // Perform the create comment request here
            const response = await fetch(`http://localhost:3200/bug/${bugId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ name }),
            });

            if (!response.ok) {
                throw new Error('Failed to create comment');
            }

            const createdComment = await response.json();

            dispatch(createCommentSuccess(createdComment));
        } catch (error) {
            dispatch(createCommentError(error.message));
        }
    };
};