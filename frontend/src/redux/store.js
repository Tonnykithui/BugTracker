import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'
import bugCloseModalReducer from './modal/reducers/bugCloseModal.reducer';
import bugOpenModalReducer from './modal/reducers/bugOpenModal.Reducer';
import createBugOpenModalReducer from './modal/reducers/createBugModal.reducer';
import { addUserToProjReducer } from './modal/reducers/addNewUserToProj';
import { addNewProjectModalReducer } from './modal/reducers/addNewProjectModal';
import { authReducer } from './user/reducers/Login';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit'

const combinedReducers = combineReducers({
    bugOpenModalReducer: bugOpenModalReducer,
    bugCloseModalReducer: bugCloseModalReducer,
    createBugReducer: createBugOpenModalReducer,
    addUserToProjReducer: addUserToProjReducer,
    addNewProjectModalReducer: addNewProjectModalReducer,
    authReducer: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], // only persist the auth state
};

export const persistedReducerStore = persistReducer(persistConfig, combinedReducers);


// export const reduxStore = createStore(
//     persistedReducerStore,
//     composeWithDevTools(applyMiddleware(thunk))
// );

export const reduxStore = configureStore({
    reducer: persistedReducerStore,
    middleware: [thunk]
})

const reduxStorePersist = persistStore(reduxStore);

export default reduxStorePersist;