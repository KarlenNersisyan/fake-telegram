import React from "react";

import classes from "./ToChatMenu.module.css";

export default function ToChatMenu(props) {
  const { avatar, name, surname, lastMessage, lastMessageDate } = props; //  destructuring props

  return (
    <>
      <div className={classes.toChatMenuWrapper}>
        <div className={classes.dialogAvatar}>
          <div className={classes.circle}></div>
        </div>
        <div className={classes.userCaption}>
          <div className={classes.dialogTitle}>
            <div className={classes.userTitle}>
              <span>{name + " " + surname}</span>
            </div>
            <div className={classes.dialogTitleDetails}>
              <p>{lastMessageDate}</p>
            </div>
          </div>
          <div className={classes.dialogSubTitle}>
            <p>{lastMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}
