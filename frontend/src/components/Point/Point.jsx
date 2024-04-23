import React, { useState, useEffect } from 'react';
import styles from './Point.module.css';

export const Point = ({ desc, example }) => {
    const [typedExample, setTypedExample] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (typedExample.length < example.length) {
                setTypedExample(example.substring(0, typedExample.length + 1));
            } else {
                setTypedExample('');
            }
        }, 200); 

        return () => clearInterval(interval);
    }, [typedExample, example]);

    const handleCopy = () => {
        navigator.clipboard.writeText(example);
    };

    return ( 
        <div>
            <p className={styles.pointDesc}>{desc}</p>
            <div className={styles.pointExampleDiv} onClick={handleCopy}>
                <p className={styles.pointExample}>127.0.0.1:6379&gt; {typedExample}</p>
            </div>
        </div>
     );
};
