import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, label, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} onClick={onClick} className={styles.button}>
    {label}
  </button>
);

Button.defaultProps = {
  type: 'button',
  label: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
