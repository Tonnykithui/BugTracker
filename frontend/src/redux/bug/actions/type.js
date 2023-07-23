import { FETCH_TICKET_TYPES_FAILURE, FETCH_TICKET_TYPES_REQUEST, FETCH_TICKET_TYPES_SUCCESS } from '../actionTypes/type';

export const fetchTicketTypesRequest = () => ({
    type: FETCH_TICKET_TYPES_REQUEST,
});

export const fetchTicketTypesSuccess = (ticketTypes) => ({
    type: FETCH_TICKET_TYPES_SUCCESS,
    payload: ticketTypes,
});

export const fetchTicketTypesFailure = (error) => ({
    type: FETCH_TICKET_TYPES_FAILURE,
    payload: error,
})

export const fetchTicketTypes = () => async (dispatch) => {
    dispatch(fetchTicketTypesRequest());
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(
            'http://localhost:3200/bug/bugType/all',
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            );
        if (!response.ok) {
            throw new Error('Failed to fetch ticket types');
        }

        const data = await response.json();
        dispatch(fetchTicketTypesSuccess(data));
    } catch (error) {
        dispatch(fetchTicketTypesFailure(error.message));
    }
};





