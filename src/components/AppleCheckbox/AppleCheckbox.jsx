import React, { useState } from "react";
import cn from "classnames";

import classes from "./AppleCheckbox.module.css";
import "../../root.css";

function AppleCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxClick() {
    setIsChecked(!isChecked);
  }

  return (
    <button onClick={handleCheckboxClick}>
      <span
        className={cn([classes.checkbox], {
          [classes.activeCheckbox]: !isChecked,
        })}
      ></span>
      <span
        className={cn([classes.round], {
          [classes.activeRound]: !isChecked,
        })}
      ></span>
    </button>
  );
}

export default AppleCheckbox;
