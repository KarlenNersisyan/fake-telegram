import React, { useState } from 'react';

import NavBarChat from '../NavBarChat/NavBarChat';
import Message from '../Message/Message';
import MessageInput from '../MessageInput/MessageInput';
import messageTypes from '../../constants/messageTypes.constant';
import getDateNow from '../../helpers/getDateNow.helper';
import idGen from '../../helpers/idGenerator.helper';

import classes from './Chat.module.css';

function Chat() {
  const currentUser = { uuid: 10 };
  const [messages, setMessages] = useState([
    {
      text: 'Hi',
      date: getDateNow(),
      author: {
        uuid: 10,
      },
    },
    {
      text: 'Hi',
      date: getDateNow(),
      author: {
        uuid: 10,
      },
    },
  ]);

  const handleOnSend = (text) => {
      setMessages((m) => [
        ...m,
        {
          text,
          type: messageTypes.mine,
          date: getDateNow(),
          author: currentUser,
        },
      ]);
  };

  return (
    <div className={classes.chat}>
      <NavBarChat />
      <div className={classes.messages}>
        {messages.map(({ text, date, author }) => {
          return (
            <Message
              key={idGen()}
              type={author.uuid === currentUser.uuid ? messageTypes.mine : messageTypes.otherUser}
              text={text}
              date={date}
            />
          );
        })}
      </div>
      <MessageInput onSend={handleOnSend} />
    </div>
  );
}

export default Chat;
