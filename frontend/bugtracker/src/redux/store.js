import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import buttonToggleReducer from "./modal/modalReducer";
import userReducerFunc from "./user/fetch/FuserReducer";
import createNewUserReducer from "./user/create/CuserReducer";
import userUpdateReducer from "./user/update/UuserReducer";
import deleteUserReducer from "./user/delete/DuserReducer";
import fetchProjectReducer from "./project/fetch/FprojReducer";
import deleteProjectReducer from "./project/delete/DprojReducer";
import updateProjectReducer from "./project/update/UprojReducers";
import projectReducer from "./project/create/projReducer";
import fetchSingleProjectReducer from "./project/fetchSingle/FsingleProjReducer";
import dispatchProjReducer from "./project/projDisp/projReducer";

const reducers = combineReducers({
  modal: buttonToggleReducer,
  users: userReducerFunc,
  createUser: createNewUserReducer,
  updateUser: userUpdateReducer,
  deleteUser: deleteUserReducer,
  createProject: projectReducer,
  fetchProject: fetchProjectReducer,
  deleteProject: deleteProjectReducer,
  updateProject: updateProjectReducer,
  fetchSingleProject: fetchSingleProjectReducer,
  /* pushSingleTicket: dispatchProjReducer, */
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
