import React, { useState } from 'react';
import { Input } from '../../../components/Input/Input';
import { ExecuteButton } from '../../../components/ExecuteButton/ExecuteButton';
import styles from './DeleteBoard.module.css'
import axios from 'axios';

export const DeleteBoard = () => {
    const [keyInput, setKeyInput] = useState('');
    const [result, setResult] = useState(null);

    const handleKeyInputChange = (value) => {
        setKeyInput(value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/delete/${keyInput}`);
            if (response.data.data === 1) {
                setResult("Успешно! Ответ Redis: " + response.data.data); 
            } else if (response.data.data === 0) {
                setResult("Такого ключа нет! Ответ Redis: " + response.data.data); 
            } else {
                setResult(response.data.data); 
            }
        } catch (error) {
            setResult(error.message)
        }
    };
    
    

    return ( 
        <div className={styles.withoutValueDiv}>
            <Input placeholder="Введите ключ" onChange={handleKeyInputChange}/>
            {typeof result === 'string' ? (
                <p>{result}</p>
            ) : result && typeof result === 'object' ? (
                <pre>{JSON.stringify(result, null, 2)}</pre>
            ) : null}

            <ExecuteButton click={handleSubmit}/>
            
            
        </div>
     );
}
