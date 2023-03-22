import { combineReducers, createStore, applyMiddleware } from 'redux';
import {  } from 'redux-devtools';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'
import bugCloseModalReducer from './modal/reducers/bugCloseModal.reducer';
import bugOpenModalReducer from './modal/reducers/bugOpenModal.Reducer';


const combinedReducers = combineReducers({
    bugOpenModalReducer: bugOpenModalReducer,
    bugCloseModalReducer: bugCloseModalReducer
}) 

const reduxStore = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default reduxStore;