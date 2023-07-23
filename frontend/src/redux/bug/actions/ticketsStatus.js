import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from "../actionTypes/ticketsStatus";

export const fetchTicketsRequest = () => ({
    type: FETCH_TICKETS_REQUEST,
});

export const fetchTicketsSuccess = (tickets) => ({
    type: FETCH_TICKETS_SUCCESS,
    payload: tickets,
});

export const fetchTicketsFailure = (error) => ({
    type: FETCH_TICKETS_FAILURE,
    payload: error,
});

export const fetchTicketsByStatus = (status) => async (dispatch) => {
    dispatch(fetchTicketsRequest());
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(
            'http://localhost:3200/bug/bugStatus/all',
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch ${status} tickets`);
        }

        const data = await response.json();
        dispatch(fetchTicketsSuccess(data));
    } catch (error) {
        dispatch(fetchTicketsFailure(error.message));
    }
};