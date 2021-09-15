import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.general}>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Main;
