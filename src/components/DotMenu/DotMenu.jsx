import React, { useState } from 'react';
import cn from 'classnames';

import Button from '../Button/Button';
import { Checked, Delete, Notify, DotMenu } from '../Icons/icons';
import NewChatMenuRow from '../NewChatMenuRow/NewChatMenuRow';
import { types } from '../../constants/formTypes.constant';

import classes from './DotMenu.module.css';

function DotMenuChat() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={cn([classes.container], { [classes.hide]: !isVisible })}>
        <NewChatMenuRow rowContent={<Notify />} rowName={'Unmute'} />
        <NewChatMenuRow rowContent={<Checked />} rowName={'Select Messages'} />
        <NewChatMenuRow rowContent={<Delete />} rowName={'Delete Chat'} />
      </div>
      <Button
        className={classes.icon}
        type={types.button.type}
        onClick={handleClick}
        btnName={<DotMenu />}
      />
    </>
  );
}

export default DotMenuChat;
