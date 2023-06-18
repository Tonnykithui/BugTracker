import { FETCH_USER_TICKETS_FAILURE, FETCH_USER_TICKETS_REQUEST, FETCH_USER_TICKETS_SUCCESS } from "../actionTypes/singleBugsForUser";
import axios from 'axios';


export const fetchUserTicketsRequest = () => ({
    type: FETCH_USER_TICKETS_REQUEST,
});

export const fetchUserTicketsSuccess = (tickets) => ({
    type: FETCH_USER_TICKETS_SUCCESS,
    payload: tickets,
});

export const fetchUserTicketsFailure = (error) => ({
    type: FETCH_USER_TICKETS_FAILURE,
    payload: error,
});

export const fetchUserTickets = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            };
            dispatch(fetchUserTicketsRequest());
            const response = await axios.get('http://localhost:3200/bug', {headers});
            const tickets = response.data;
            dispatch(fetchUserTicketsSuccess(tickets));
        } catch (error) {
            dispatch(fetchUserTicketsFailure(error.message));
        }
    };
};




