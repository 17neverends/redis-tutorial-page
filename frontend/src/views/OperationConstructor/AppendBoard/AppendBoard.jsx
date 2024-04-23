import React, { useState } from 'react';
import { Input } from '../../../components/Input/Input';
import { Textarea } from '../../../components/Textarea/Textarea';
import styles from './AppendBoard.module.css';
import Checkbox from '@mui/material/Checkbox';
import { ExecuteButton } from '../../../components/ExecuteButton/ExecuteButton';
import { FormControlLabel } from '@mui/material';
import axios from 'axios';

export const AppendBoard = () => {
    const [checked, setChecked] = useState(false);
    const [keyInput, setKeyInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [responseContent, setResponseContent] = useState(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked);
        if (!checked) {
            setValueInput(JSON.stringify(exampleJSON, null, 2));
        } else {
            setValueInput('');
        }
    };


    const handleKeyInputChange = (value) => {
        setKeyInput(value);
    };

    const handleValueInputChange = (value) => {
        setValueInput(value);
    };


    const handleSubmit = async () => {
        setIsButtonVisible(false);
        try {
            const data = {
                key: keyInput,
                value: valueInput,
            };
            const response = await axios.post('http://127.0.0.1:8000/insert/append', data);
            setResponseContent("Успешно! Длина строки после вставки = " + response.data.data);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
        setTimeout(() => {
            setIsButtonVisible(true); 
        }, 3000);
    };

    const exampleJSON = {
        key1: "value1",
        key2: "value2"
    };

    return ( 
        <div className={styles.containerKeyValue}>
            <div className={styles.main}>
                <div className={styles.columnsInputs}>
                    <Input placeholder="Введите ключ" onChange={handleKeyInputChange} />
                </div>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChangeCheckbox} color="primary" />}
                    label="Формат JSON?"
                />
                
            
                {checked ? <Textarea value={valueInput} placeholder="Введите значение в формате JSON" onChange={handleValueInputChange} /> : <Input value={valueInput} placeholder="Введите значение в формате строки" onChange={handleValueInputChange} />}
            </div>
            {isButtonVisible && <ExecuteButton click={handleSubmit} />}
            {responseContent && !isButtonVisible && <p className={styles.statusResponse}>{responseContent}</p>}
        </div>
     );
};
