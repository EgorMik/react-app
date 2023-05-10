import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, updateText, radio, handleRadio}) => {
    return (
      <div className ='radioInput'>
        <li>
      <em onClick={handleRadio} className={ radio ? 'selected' : null}></em>
      </li>
        <input type="text" placeholder="Add your important task"
          value={value}
          onChange={(e) => updateText(e.target.value)}/>
        
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