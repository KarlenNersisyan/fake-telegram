import React, { useEffect, useState } from 'react';

import Settings from '../Settings/Settings';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NewChatMenu from '../NewChatMenu/NewChatMenu';
import Search from '../Search/Search';
import ToChatMenu from '../ToChatMenu/ToChatMenu';
import idGen from '../../helpers/idGenerator.helper';
import { getUser } from '../../services/user.services';

import classes from './Sidebar.module.css';

function Sidebar() {
  const [toChat, setToChat] = useState([]);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingOpen(!isSettingOpen);
  };

  useEffect(() => {
    getUser().then((res) => {
      setToChat(Object.values(res));
    });
  }, []);

  return (
    <>
      {isSettingOpen ? (
        <Settings handleSettingsClick={handleSettingsClick} />
      ) : (
        <div className={classes.Sidebar}>
          <div className={classes.sidebarHeader}>
            <BurgerMenu handleSettingsClick={handleSettingsClick} />
            <Search />
          </div>
          <div className={classes.sidebarContent}>
            {toChat.map(({ avatar, name, surname, lastMessage, lastMessageDate }) => {
              return (
                <ToChatMenu
                  key={idGen()}
                  avatar={avatar}
                  name={name}
                  surname={surname}
                  lastMessage={lastMessage}
                  lastMessageDate={lastMessageDate}
                />
              );
            })}
          </div>
          <NewChatMenu />
        </div>
      )}
    </>
  );
}

export default Sidebar;
