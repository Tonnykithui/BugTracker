import { OTHER_FETCH_USER_TICKETS_FAILURE, OTHER_FETCH_USER_TICKETS_REQUEST, OTHER_FETCH_USER_TICKETS_SUCCESS } from "../actionTypes/OtherUserBug";

export const fetchOtherUserTicketsRequest = (userId) => ({
    type: OTHER_FETCH_USER_TICKETS_REQUEST,
    payload: {
        userId,
    },
});

export const fetchOtherUserTicketsSuccess = (tickets) => ({
    type: OTHER_FETCH_USER_TICKETS_SUCCESS,
    payload: {
        tickets,
    },
});

export const fetchOtherUserTicketsFailure = (error) => ({
    type: OTHER_FETCH_USER_TICKETS_FAILURE,
    payload: {
        error,
    },
});

export const fetchOtherUserTickets = (userId) => async (dispatch) => {
    dispatch(fetchOtherUserTicketsRequest(userId));

    const token = localStorage.getItem('token');
    try {
        const response = await fetch(
            `http://localhost:3200/bug/otherUsers/${userId}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch user tickets');
        }

        const tickets = await response.json();

        dispatch(fetchOtherUserTicketsSuccess(tickets));
    } catch (error) {
        dispatch(fetchOtherUserTicketsFailure(error.message));
    }
};