import React from 'react';
import styles from './Operation.module.css';

export const Operation = ({ text, click, isSelected }) => {
    return (
        <button
            className={`${styles.Operation} ${isSelected ? styles.selectedOperation : ''}`}
            onClick={click}
        >
            {text}
        </button>
    );
}
