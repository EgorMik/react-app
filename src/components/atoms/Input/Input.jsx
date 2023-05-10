import React from 'react';

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
  
  export default Input;