import React from "react";
import "../css/homePage.css";
import Company from "./Company";
import SideBar from "./SideBar";

function HomePage() {
  return (
    <div className="HomePage">
      <SideBar />
      <Company />
    </div>
  );
}

export default HomePage;
