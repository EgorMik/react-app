import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleAction}) => {
    return (
        <button onClick={handleAction}>Add todo</button>
    );
};
Button.propTypes = {
    handleAction: PropTypes.func
  }
export default Button;