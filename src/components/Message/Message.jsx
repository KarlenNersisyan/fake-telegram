import React from "react";

import messageTypes from "../../constants/messageTypes.constant";

import classes from "./Message.module.css";

function Message({ type, text, date }) {
  return (
    <div
      className={
        type === messageTypes.mine ? classes.myBubble : classes.othersBubble
      }
    >
      <div
        className={
          type === messageTypes.mine
            ? classes.myMessage
            : classes.otherUserMessage
        }
      >
        <p className={classes.message}>{text}</p>
        <p className={classes.messageTime}>{date}</p>
      </div>
    </div>
  );
}

export default Message;
