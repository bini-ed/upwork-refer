import React from "react";
import "../css/sideBar.css";
import { ChevronLeft, Assessment, Help } from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <div></div>
        <div className="sidebar__title">
          <h2>Refer</h2>
        </div>
        <ChevronLeft fontSize="large" className="icon" />
      </div>
      <p>Get started</p>
      <div className="sidebar__icon__company">
        <Assessment fontSize="large" style={{ color: "white" }} />
        <h4>Companies</h4>
      </div>

      <div className="sidebar__bottom">
        <div className="help__icon">
          <Help fontSize="large" style={{ color: "rgb(1,126,250)" }} />
        </div>
        <h4>Need Help with Refer?</h4>
        <button>Email out team</button>
      </div>
    </div>
  );
};

export default SideBar;
