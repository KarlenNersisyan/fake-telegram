import React, { useState } from 'react';
import cn from 'classnames';

import { Bookmark, Bug, Menu, Moon, Settings, User, Animation } from '../Icons/icons';
import Button from '../Button/Button';
import NewChatMenuRow from '../NewChatMenuRow/NewChatMenuRow';
import AppleCheckbox from '../AppleCheckbox/AppleCheckbox';
import { types } from '../../constants/formTypes.constant';

import classes from './BurgerMenu.module.css';

function BurgerMenu({ handleSettingsClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Button
        btnName={<Menu />}
        onClick={handleBtnClick}
        type={types.button.type}
        className={classes.circle}
      />
      <div className={cn([classes.menuContent], { [classes.hide]: !isActive })}>
        <NewChatMenuRow rowContent={<Bookmark />} rowName={'Saved Messages'} />
        <NewChatMenuRow rowContent={<User />} rowName={'Contacts'} />
        <NewChatMenuRow
          rowContent={<Settings />}
          rowName={'Settings'}
          onClick={handleSettingsClick}
        />
        <NewChatMenuRow rowContent={<Moon />} rowName={'Dark Mode'} checkBox={AppleCheckbox()} />
        <NewChatMenuRow
          rowContent={<Animation />}
          rowName={'Animation'}
          checkBox={AppleCheckbox()}
        />
        <NewChatMenuRow rowContent={<Bug />} rowName={'Report Bug'} />
      </div>
    </>
  );
}

export default BurgerMenu;
