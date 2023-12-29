import React from 'react'

const Button = ({ value, disabled }) => {
    return (
        <div className='buttonContainer'>
            <button disabled={disabled}>{value}</button>
        </div>
    )
}

export default Button