import { combineReducers, createStore, applyMiddleware } from 'redux';
import {  } from 'redux-devtools';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'
import bugCloseModalReducer from './modal/reducers/bugCloseModal.reducer';
import bugOpenModalReducer from './modal/reducers/bugOpenModal.Reducer';
import createBugOpenModalReducer from './modal/reducers/createBugModal.reducer';
import { addUserToProjReducer } from './modal/reducers/addNewUserToProj';


const combinedReducers = combineReducers({
    bugOpenModalReducer: bugOpenModalReducer,
    bugCloseModalReducer: bugCloseModalReducer,
    createBugReducer: createBugOpenModalReducer,
    addUserToProjReducer: addUserToProjReducer
}) 

const reduxStore = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default reduxStore;