import { FETCH_TICKETS_PRIORITY_FAILURE, FETCH_TICKETS_PRIORITY_REQUEST, FETCH_TICKETS_PRIORITY_SUCCESS } from "../actionTypes/ticketPriority";

export const fetchTicketsPriorityRequest = () => ({
    type: FETCH_TICKETS_PRIORITY_REQUEST,
});

export const fetchTicketsPrioritySuccess = (tickets) => ({
    type: FETCH_TICKETS_PRIORITY_SUCCESS,
    payload: tickets,
});

export const fetchTicketsPriorityFailure = (error) => ({
    type: FETCH_TICKETS_PRIORITY_FAILURE,
    payload: error,
});

export const fetchTicketsByPriority = (priority) => async (dispatch) => {
    dispatch(fetchTicketsPriorityRequest());
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(
            'http://localhost:3200/bug/bugPriority/all',
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch tickets with priority ${priority}`);
        }

        const data = await response.json();
        dispatch(fetchTicketsPrioritySuccess(data));
    } catch (error) {
        dispatch(fetchTicketsPriorityFailure(error.message));
    }
};