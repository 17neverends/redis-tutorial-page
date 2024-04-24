import styles from './DataStructurePoint.module.css';
import { Point } from '../../../components/Point/Point';
import React from 'react';
import { PointTitle } from '../../../components/PointTitle/PointTitle';

export const StructurePoint = ({ title, desc, example }) => {

    return (
        <div className={styles.pointDiv}>
            <PointTitle title={title}/>
            {desc.map((item, index) => (
                <Point
                    key={`desc_${index}`}
                    desc={item}
                    example={example[index]}
                />
            ))}
        </div>
    );
};
