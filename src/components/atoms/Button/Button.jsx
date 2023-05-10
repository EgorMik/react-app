import React from 'react';
const Button = ({ handleAction}) => {
    return (
        <button onClick={handleAction}>Add todo</button>
    );
};
export default Button;