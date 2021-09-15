import React from "react";

import { Arrow } from "../Icons/icons";

import classes from "./SendMessage.module.css";

function SendMessage({ onClick }) {
  return (
    <div className={classes.circle}>
      <button onClick={onClick}>
        <Arrow />
      </button>
    </div>
  );
}

export default SendMessage;
