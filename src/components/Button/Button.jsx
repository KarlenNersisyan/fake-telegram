import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { type, btnName, onClick, className } = props; //  destructuring props
  return (
    <button type={type} onClick={onClick} className={className}>
      {btnName}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  btnName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func,
};
