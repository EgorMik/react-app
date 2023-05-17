import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ handleAction}) => {
    return (
        <button 
        onClick={handleAction}
        className={styles.button}>
            Add todo
        </button>
    );
};
Button.propTypes = {
    handleAction: PropTypes.func
  }
export default Button;