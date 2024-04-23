import styles from './ExecuteButton.module.css'

export const ExecuteButton = ( {click} ) => {
    return (  
        <div>
            <button type='button' className={styles.ExecuteButton} onClick={click}>Выполнить</button>
        </div>
    );
}
 
