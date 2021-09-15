import React, { useRef, useState } from 'react';
import Picker from 'emoji-picker-react';

import FileUpload from '../FileUpload/FileUpload';
import SendMessage from '../SendMessage/SendMessage';
import { types } from '../../constants/formTypes.constant';
import { Smile } from '../Icons/icons';
import Button from '../Button/Button';

import classes from './MessageInput.module.css';

function MessageInput({ onSend }) {
  const inputRef = useRef();
  const [message, setMessage] = useState('');
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  const pickEmoji = (e, { emoji }) => {
    const ref = inputRef.current;
    ref.focus();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const text = start + emoji + end;
    setMessage(text);
    setCursorPosition(start.length + emoji.length);
  };

  const handleEmojiButton = () => {
    setIsEmojiOpen(!isEmojiOpen);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={classes.messageInput}>
      <div className={classes.smileIcon}>
        <Button btnName={<Smile />} onClick={handleEmojiButton} />
        <div className={isEmojiOpen ? classes.smileMenu : classes.smileMenuClose}>
          <Picker onEmojiClick={pickEmoji} pickerStyle={{ border: 'none', boxShadow: 'none' }} />
        </div>
      </div>
      <input
        type={types.input.message.type}
        placeholder={types.input.message.placeholder}
        className={classes.input}
        onChange={handleInputChange}
        value={message}
        ref={inputRef}
      />
      <SendMessage
        onClick={() => {
          if (message.length === 0) {
            return;
          }
          onSend(message);
          setMessage('');
        }}
      />
      <FileUpload />
    </div>
  );
}

export default MessageInput;
