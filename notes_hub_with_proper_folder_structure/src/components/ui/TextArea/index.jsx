import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TextArea = ({name, placeholder, required, className, inputRef, onChange, value, rows}) => (
    <Fragment>
        <textarea name={name} placeholder={placeholder} required={required} className={className} ref={inputRef} onChange={onChange} value={value} rows={rows}></textarea>
    </Fragment>    
)

TextArea.defaultProps = {
    name: "",
    placeholder: "",
    required: false,
    className: null,
    inputRef: null,
    onChange: ()=>null,
    value: undefined,
    rows: null
}

TextArea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    rows: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

export default TextArea
