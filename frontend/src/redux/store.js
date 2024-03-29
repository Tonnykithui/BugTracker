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
import projectUpdateReducer from './project/reducers/UpdateProject';
import addNewProjectReducer from './project/reducers/NewProject';
import projectFetchReducer from './project/reducers/FetchProject';
import projectDeleteReducer from './project/reducers/DeleteProject';
import commentCreateReducer from './comment/reducers/createComment';
import commentDeleteReducer from './comment/reducers/deleteComment';
import commentFetchReducer from './comment/reducers/fetchComment';
import addBugReducer from './bug/reducers/createBug';
import bugDeleteReducer from './bug/reducers/deleteBug';
import bugUpdateReducer from './bug/reducers/updateBug';
import userCreateReducer from './user/reducers/CreateUser';
import usersFetchReducer from './user/reducers/FetchUsers';
import projectSingleReducer from './project/reducers/SingleProject';
import bugSingleReducer from './bug/reducers/fetchSingleBug';
import singleUserReducer from './user/reducers/FetchSingleUser';
import fetchUsersInProject from './user/reducers/FetchUsersInProject';
import userTicketsReducer from './bug/reducers/userBugs';
import userProjectsReducer from './project/reducers/SingleUserProjects';
import OtherUserProjectsReducer from './project/reducers/OtherUserProjects';
import OtherUserTicketsReducer from './bug/reducers/otherUserBug';
import confirmBugDeleteReducer from './modal/reducers/confirmDelete';
import pendingTicketsReducer from './bug/reducers/pendingBug';
import ticketTypesReducer from './bug/reducers/type';
import ticketStatusReducer from './bug/reducers/ticketStatus';
import ticketPrioritytReducer from './bug/reducers/ticketPriority';
import confirmUserDeleteReducer from './modal/reducers/confirmUserDelete';
// import { createStore } from 'redux';

const combinedReducers = combineReducers({
    bugOpenModalReducer: bugOpenModalReducer,
    bugCloseModalReducer: bugCloseModalReducer,
    createBugReducer: createBugOpenModalReducer,
    addUserToProjReducer: addUserToProjReducer,
    addNewProjectModalReducer: addNewProjectModalReducer,
    authReducer: authReducer,
    projectUpdateReducer:projectUpdateReducer,
    addNewProjectReducer: addNewProjectReducer,
    projectFetchReducer: projectFetchReducer,
    projectDeleteReducer: projectDeleteReducer,
    commentCreateReducer: commentCreateReducer,
    commentDeleteReducer: commentDeleteReducer,
    commentFetchReducer: commentFetchReducer,
    addBugReducer: addBugReducer,
    bugDeleteReducer: bugDeleteReducer,
    bugUpdateReducer: bugUpdateReducer,
    userCreateReducer: userCreateReducer,
    usersFetchReducer: usersFetchReducer,
    projectSingleReducer: projectSingleReducer,
    bugSingleReducer: bugSingleReducer,
    singleUserReducer: singleUserReducer,
    fetchUsersInProject: fetchUsersInProject,
    userTicketsReducer: userTicketsReducer,
    userProjectsReducer: userProjectsReducer,
    OtherUserProjectsReducer: OtherUserProjectsReducer,
    OtherUserTicketsReducer: OtherUserTicketsReducer,
    confirmBugDeleteReducer: confirmBugDeleteReducer,
    pendingTicketsReducer: pendingTicketsReducer,
    ticketTypesReducer: ticketTypesReducer,
    ticketStatusReducer: ticketStatusReducer,
    ticketPrioritytReducer: ticketPrioritytReducer,
    confirmUserDeleteReducer: confirmUserDeleteReducer
})

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['auth'], // only persist the auth state
};

export const persistedReducerStore = persistReducer(persistConfig, combinedReducers);


// export const reduxStore = createStore(
//     persistedReducerStore,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export const reduxStore = configureStore({
//     reducer: persistedReducerStore,
//     middleware: [thunk]
// })

const store = createStore(
    persistedReducerStore,
    applyMiddleware(thunk)
)

const reduxStorePersist = persistStore(store);

export { store, reduxStorePersist };
// export default reduxStorePersist;