import React from 'react';
import PropTypes from "prop-types";

const CustomSelect = ({className, name, inputRef, option, onChange}) => {
    return (
        <select className={className} name={name} ref={inputRef} onChange={onChange}>
            {
                option.map((item)=>{
                    return (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                })
            }
        </select>
    )
}

CustomSelect.defaultProps = {
    name: "",
    className: null,
    inputRef: null,
    onChange: ()=>null,
    option: null,
}

CustomSelect.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    option: PropTypes.arrayOf(PropTypes.object),
}

export default CustomSelect;
