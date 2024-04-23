import { Link } from "react-router-dom";
import styles from './Header.module.css';

export const RenderHeader = () => {
    return (
        <div className={styles.header}>
            <img src="/redis.png" className={styles.logo}/> 
            <h1><Link to={'/'}> Redis Tutorial</Link></h1> 
        </div>
    )
}