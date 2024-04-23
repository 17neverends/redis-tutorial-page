import styles from './PointTitle.module.css';

export const PointTitle = ( { title } ) => {
    return ( 
        <div>
            <p className={styles.pointTitle}>{title}</p>
        </div>
     );
}
 
