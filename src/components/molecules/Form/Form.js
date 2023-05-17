import React from 'react';
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import PropTypes from 'prop-types';

const Form = ({ value, updateText, handleAction, radio, handleRadio }) => {
    return (
        <div className="form">
          <form onSubmit={e => {e.preventDefault();}}>
              <Input
               radio={radio}
               value={value}
               updateText={updateText}
               handleRadio={handleRadio}
             />
              <Button 
              handleAction={handleAction}
              />
          </form>
        </div>
    );
  };
  Form.propTypes = {
    value: PropTypes.string,
    updateText: PropTypes.func,
    handleAction: PropTypes.func,
    radio: PropTypes.bool,
    handleRadio: PropTypes.func,
  }
  export default Form;
