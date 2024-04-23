import React, { useState } from 'react';
import { Input } from '../../../components/Input/Input';
import { ExecuteButton } from '../../../components/ExecuteButton/ExecuteButton';
import styles from './WithoutValue.module.css'
import axios from 'axios';

export const WithoutValue = ( {method} ) => {
    const [keyInput, setKeyInput] = useState('');
    const [result, setResult] = useState(null);

    const handleKeyInputChange = (value) => {
        setKeyInput(value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/check/${method}/${keyInput}`);
            if (response.status === 200 && response.data) {
                setResult(response.data); 
            } else {
                console.error('Ошибка при получении данных:', response);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setResult("Данный ключ не найден"); 
            } else {
                console.error('Ошибка при отправке данных:', error);
            }
        }
    };
    

    return ( 
<div className={styles.withoutValueDiv}>
            <Input placeholder="Введите ключ" onChange={handleKeyInputChange} />
            {typeof result === 'string' ? (
                <p>{result}</p>
            ) : result && typeof result === 'object' ? (
                <div>
                    {result.map((item, index) => (
                        <div key={index}>
                            <p>{item.key}</p>
                        </div>
                    ))}
                </div>
            ) : null}

            <ExecuteButton click={handleSubmit} />
        </div>
     );
}
