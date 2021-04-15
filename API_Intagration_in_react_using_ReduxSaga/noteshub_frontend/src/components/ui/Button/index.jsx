import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ type, className, disabled, onClick, label }) => {
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >{label}</button>
    )
}

CustomButton.defaultProps = {
    type: "button",
    label: "",
    className: null,
    disabled: false,
    onClick: () => null
}

CustomButton.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["submit", "button"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}



export default CustomButton
