import React from 'react';
import style from './Input.module.css';

export const Input = ({ value, placeholder, onChange }) => {
    return (
        <input 
            className={style.inputcomp}
            type="text" 
            placeholder={placeholder}
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    );
};
