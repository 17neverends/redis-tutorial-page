import { CommandPoint } from "./CommandPoint/CommandPoint";
import styles from './CommandTutorial.module.css';

export const CommandTutorial = () => {
    return (  
        <div className={styles.commandTutorial}>
        <CommandPoint 
            title='SET'
            desc='Команда используется для установки ключа и его значения, с дополнительными необязательными параметрами для указания срока действия записи значения ключа.'
            example='SET foo "value"'
        />

        <CommandPoint 
            title='EX/PX'
            desc='Параметр EX указывает время жизни объекта в секундах, PX в милисекундах'
            example='SET foo "value" ex 17'
        />

        <CommandPoint 
            title='GET'
            desc='Команда используется для получения значения, связанного с ключом. Если запись значения ключа превысила срок действия, будет возвращено nil'
            example='GET foo'
        />
        <CommandPoint 
            title='EXISTS'
            desc='Эта команда проверяет, существует ли что то с данным ключом. Она возвращает 1 если объект существует или 0 если нет'
            example='EXISTS foo'
        />
        <CommandPoint 
            title='DEL'
            desc='Команда удаляет ключ и соответствующее значение'
            example='DEL foo'
        />
        <CommandPoint 
            title='APPEND'
            desc='Команда добавляем в соотвествующий ключ дополнительное значение. Возвращает количество символов итогового значения'
            example='APPEND foo "neverends"'
        />
        <CommandPoint 
            title='KEYS'
            desc='Возвращает все ключи из базы по указанному шаблону'
            example='KEYS *'
        />
        <CommandPoint 
            title='TTL'
            desc='Когда ключ установлен с истечением срока действия, например SET foo EX 10, эту команду можно использовать для просмотра оставшегося времени'
            example='TTL foo'
        />    
        </div>
    );
}
 
