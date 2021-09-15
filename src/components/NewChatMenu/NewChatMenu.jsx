import React, { useState } from 'react';
import cn from 'classnames';

import Button from '../Button/Button';
import { Pen, User, Speaker, Group, Close } from '../Icons/icons';
import { types } from '../../constants/formTypes.constant';
import NewChatMenuRow from '../NewChatMenuRow/NewChatMenuRow';

import classes from './NewChatMenu.module.css';

export default function NewChatMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleBtnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={classes.wrapper}>
      <div className={cn([classes.container], { [classes.hide]: !isVisible })}>
        <NewChatMenuRow rowContent={<Speaker />} rowName={'New Channel'} className={classes.text}/>
        <NewChatMenuRow rowContent={<Group />} rowName={'New Group'} className={classes.text}/>
        <NewChatMenuRow rowContent={<User />} rowName={'New Private Chat'} className={classes.text}/>
      </div>
      <Button
        btnName={isVisible ? <Close /> : <Pen />}
        onClick={handleBtnClick}
        className={classes.NewChatMenuBtn}
        type={types.button.type}
      />
    </div>
  );
}
