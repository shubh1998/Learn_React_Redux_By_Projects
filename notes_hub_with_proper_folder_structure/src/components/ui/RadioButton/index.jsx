import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const CustomRadioButton = ({className, inputRef, radios, required, name}) => {
    return (
        <div className="form-check form-check-inline">
            {
                radios.map((radioItem) => (
                    <Fragment>
                        <input className={className} type="radio" name={name} id={name} ref={inputRef} value={radioItem.value} required={required} />
                        <label className="form-check-label">
                            {radioItem.label}
                        </label>
                    </Fragment>
                ))
            }
        </div>
    )
}

CustomRadioButton.defaultProps = {
    radios: null,
    className: null,
    inputRef: null,
    required: false
}

CustomRadioButton.propTypes = {
    radios: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    inputRef: PropTypes.func,
    required: PropTypes.bool
}

export default CustomRadioButton;
