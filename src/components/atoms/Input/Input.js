import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ value, updateText, radio, handleRadio}) => {
    return (
    <div className ={styles.header}>

      <input 
      type="checkbox" 
      onClick={handleRadio}
      onChange={() => {}} checked={radio}
      className={styles.checkbox}/>

      <input 
      type="text" 
      placeholder="Add your important task"
      value={value}
      onChange={(e) => updateText(e.target.value)}
      className={styles.input}/>

    </div>
    );
  };
  Input.propTypes = {
    value: PropTypes.string,
    updateText: PropTypes.func,
    radio: PropTypes.bool,
    handleRadio: PropTypes.func,
  }
  export default Input;