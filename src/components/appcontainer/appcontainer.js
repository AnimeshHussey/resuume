import react from "react";
import Profile from "./profile/profile";
import Workdetails from "./workdetails/workdetails";
import "./appcontainer.scss";

const appcontainer = () => {
  return (
    <div className="app-container-body">
      <div>
        <div className="div-profile">
          <Profile />
        </div>
        <div className="div-workdetails"></div>
        <Workdetails />
      </div>
      <div className="technology"></div>
    </div>
  );
};

export default appcontainer;
