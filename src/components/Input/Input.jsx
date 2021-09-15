import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

function Input(props) {
  const { id, name, type, onChange, onBlur, value, label, autoFocus, variant } = props; //  destructuring props

  return (
    <div className={classes.inputField}>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={variant === 'primary' ? classes.inputPrimary : classes.inputSecondary}
        required
        autoFocus={autoFocus}
      />
      <label className={classes.inputBanner}>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
};
