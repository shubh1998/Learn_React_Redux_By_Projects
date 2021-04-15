import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TextField = ({name, placeholder, required, className, inputRef, onChange, value, rows, type, autocomplete}) => (
    <Fragment>
        <input autoComplete={autocomplete} type={type} name={name} placeholder={placeholder} required={required} className={className} ref={inputRef} onChange={onChange} value={value} rows={rows}/>
    </Fragment>    
)

TextField.defaultProps = {
    name: "",
    placeholder: "",
    required: false,
    className: null,
    inputRef: null,
    onChange: ()=>null,
    value: undefined,
    rows: null,
    type: "text",
    autocomplete: "false"
}

TextField.propTypes = {
    name: PropTypes.string,
    autocomplete: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    rows: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

export default TextField
