import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Arrow, Logout, Pen } from '../Icons/icons';
import Button from '../Button/Button';
import NewChatMenuRow from '../NewChatMenuRow/NewChatMenuRow';
import { useAuth } from '../../hooks/useAuth.hook';
import routes from '../../constants/routes.constant';
import EditProfile from '../EditProfile/EditProfile';

import classes from './Settings.module.css';

function Settings({ handleSettingsClick }) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const { signout } = useAuth();
  const history = useHistory();

  const handleSubmit = () => {
    history.replace(routes.login().route);
    signout();
  };

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  return (
    <>
      {isEditProfileOpen ? (
        <EditProfile setIsEditProfileOpen={setIsEditProfileOpen} />
      ) : (
        <div className={classes.settings}>
          <div className={classes.settingsHeader}>
            <Button btnName={<Arrow />} className={classes.backBtn} onClick={handleSettingsClick} />
            <Button btnName={<Logout />} onClick={handleSubmit} />
          </div>
          <div className={classes.settingsAbout}>
            <div className={classes.circle}></div>
            <div className={classes.fullName}>Name Surname</div>
            <div className={classes.email}>namesurname2000@gmail.com</div>
          </div>
          <NewChatMenuRow
            rowContent={<Pen />}
            rowName={'Edit Profile'}
            onClick={handleEditProfileClick}
          />
        </div>
      )}
    </>
  );
}

export default Settings;
