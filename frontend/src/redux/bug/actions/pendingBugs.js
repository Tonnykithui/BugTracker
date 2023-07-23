import { FETCH_PENDING_TICKETS_FAILURE, FETCH_PENDING_TICKETS_REQUEST, FETCH_PENDING_TICKETS_SUCCESS } from '../actionTypes/pendingBug';

export const fetchPendingTicketsRequest = () => ({
    type: FETCH_PENDING_TICKETS_REQUEST,
});

export const fetchPendingTicketsSuccess = (tickets) => ({
    type: FETCH_PENDING_TICKETS_SUCCESS,
    payload: tickets,
});

export const fetchPendingTicketsFailure = (error) => ({
    type: FETCH_PENDING_TICKETS_FAILURE,
    payload: error,
});

export const fetchPendingTickets = () => {
    return async (dispatch) => {
        dispatch(fetchPendingTicketsRequest());

        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3200/bug/pendingTickets', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log('HAPPY ',data)
                dispatch(fetchPendingTicketsSuccess(data))
            }
            )
    };
};

// .then((response) => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then((data) => {
        //     // console.log('UNDONE TICKETS FROM THUNK MIDDLEWARE', data.json());
        //     // let dataToReturn = await data.json()
        //     console.log('UNDONE TICKETS FROM THUNK MIDDLEWARE', data)
        //     dispatch(fetchPendingTicketsSuccess(data.data));
        // }).catch((error) => {
        //     dispatch(fetchPendingTicketsFailure(error.message));
        // });
        // console.log('RESULTS FROM PENDINGTICKETS ENDPOINT', res)