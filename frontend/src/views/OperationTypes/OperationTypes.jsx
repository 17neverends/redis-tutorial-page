import React from 'react';
import styles from './OperationTypes.module.css';
import { Operation } from '../../components/Operation/Operation';

export const OperationTypes = ({ operations, selectedOperation, onSelectOperation }) => {

    const handleOperationClick = (operation) => {
        onSelectOperation(operation);
    };

    return (
        <div className={styles.operationDiv}>
            <p className={styles.operationTitle}>Выберите операцию</p>
            <div className={styles.operationChoose}>
                {operations.map((operation, index) => (
                    <Operation 
                        key={index} 
                        text={operation} 
                        isSelected={operation === selectedOperation} 
                        click={() => handleOperationClick(operation)} 
                    />
                ))}
            </div>
        </div>
    );
}
