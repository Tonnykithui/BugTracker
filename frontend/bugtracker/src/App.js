import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Forgot from "./components/forgotPass/Forgot";
import Sidebar from "./components/sidebar/Sidebar";
import Administration from "./components/pages/Administration";
import ProfileC from "./components/pages/ProfileC";
import Tickets from "./components/pages/Tickets";
import Home from "./components/pages/Home";
import AddUser from "./components/modal/AddUser";
import ConfirmDelete from "./components/modal/ConfirmDelete";
import NewUser from "./components/modal/NewUser";
import NewProject from "./components/modal/NewProject";
import ProjectInfo from "./components/pages/ProjectInfo";
import EditProject from "./components/modal/EditProject";
import NewTicket from "./components/modal/NewTicket";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center w-full h-full overflow-y-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/projects/:id" element={<ProjectInfo />} />
        </Routes>
        <NewUser />
        <AddUser />
        <ConfirmDelete />
        <NewProject />
        <EditProject />
        <NewTicket />
      </div>
    </Provider>
  );
}

export default App;
