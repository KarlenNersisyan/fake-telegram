import React from 'react';

import classes from './NewChatMenuRow.module.css';

function NewChatMenuRow(props) {
  const { rowContent, rowName, checkBox, onClick } = props;

  return (
    <div className={classes.NewChatMenuRow} onClick={onClick}>
      <div className={classes.icon}>{rowContent}</div>
      <span className={classes.text}> {rowName} </span>
      <div className={classes.checkBox}>{checkBox}</div>
    </div>
  );
}

export default NewChatMenuRow;
