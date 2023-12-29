import React from 'react'

const Input = ({ label, type, placeholder, name, value, onChange, onBlur, errorMessage }) => {
    return (
        <div className='inputContainer'>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default Input;