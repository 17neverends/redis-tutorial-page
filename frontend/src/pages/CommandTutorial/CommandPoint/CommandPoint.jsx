import styles from './CommandPoint.module.css';
import React from 'react';
import { Point } from '../../../components/Point/Point';
import { PointTitle } from '../../../components/PointTitle/PointTitle';

export const CommandPoint = ({ title, desc, example }) => {


    return (
        <div className={styles.pointDiv}>
            <PointTitle title={title}/>
            <Point
                desc={desc}
                example={example}
            />
        </div>
    );
};
