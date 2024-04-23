import React, { useState } from 'react';
import { Input } from '../../../components/Input/Input';
import { Textarea } from '../../../components/Textarea/Textarea';
import styles from './SetBoard.module.css';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ExecuteButton } from '../../../components/ExecuteButton/ExecuteButton';
import axios from 'axios';

export const SetBoard = () => {
    const [checked, setChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState('without');
    const [keyInput, setKeyInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [pxValue, setPxValue] = useState('');
    const [exValue, setExValue] = useState('');
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

    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleKeyInputChange = (value) => {
        setKeyInput(value);
    };

    const handleValueInputChange = (value) => {
        setValueInput(value);
    };

    const handlePxInputChange = (value) => {
        setPxValue(value);
    };

    const handleExInputChange = (value) => {
        setExValue(value);
    };

    const handleSubmit = async () => {
        setIsButtonVisible(false); 
        try {
            const data = {
                key: keyInput,
                value: valueInput,
                ex: selectedValue === 'ex' ? exValue : null,
                px: selectedValue === 'px' ? pxValue : null
            };
            const response = await axios.post('http://127.0.0.1:8000/insert/set', data);
            setResponseContent(response.data.data);
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
                    {selectedValue === 'px' && <Input value={pxValue} placeholder="Введите время в миллисекундах" onChange={handlePxInputChange} />}
                    {selectedValue === 'ex' && <Input value={exValue} placeholder="Введите время в секундах" onChange={handleExInputChange} />}
                </div>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChangeCheckbox} color="primary" />}
                    label="Формат JSON?"
                />
                <FormControl component="fieldset">
                    <RadioGroup value={selectedValue} onChange={handleChangeRadio}>
                        <FormControlLabel value="without" control={<Radio />} label="Нет ограничений" />
                        <FormControlLabel value="ex" control={<Radio />} label="EX (с)" />
                        <FormControlLabel value="px" control={<Radio />} label="PX (мс)" />
                    </RadioGroup>
                </FormControl>
            
                {checked ? <Textarea value={valueInput} placeholder="Введите значение в формате JSON" onChange={handleValueInputChange} /> : <Input value={valueInput} placeholder="Введите значение в формате строки" onChange={handleValueInputChange} />}
            </div>
            {isButtonVisible && <ExecuteButton click={handleSubmit} />}
            {responseContent && !isButtonVisible && <p className={styles.statusResponse}>{responseContent}</p>}
        </div>
     );
};
