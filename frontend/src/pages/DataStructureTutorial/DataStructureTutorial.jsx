import styles from './DataStructureTutorial.module.css'
import { StructurePoint } from './DataStructurePoint/DataStructurePoint';

export const DataStructureTutorial = () => {
    return ( 
        <div>
            <StructurePoint
                title='Хэш таблицы'
                desc={[
                    'Для записи объекта используется команда HSET в следующем формате.',
                    'Для чтения объекта используется команда HGET в формате.',
                    'Команда HGETALL используется для получения всех полей и значений объекта.'
                ]}
                example={[
                    'HSET key attr value',
                    'HGET key attr',
                    'HGETALL key'
                ]}
            />
            <StructurePoint
                title='Множества'
                desc={[
                    'Не упорядоченная коллекция уникальных элементов. Для добавление нового элемента во множество используется команда SADD.',
                    'SUNION используется для объединение множеств.',
                    'SDIFF используется для вычитания из первого множества второго.'
                ]}
                example={[
                    'SADD key key1',
                    'SUNION s1 s2',
                    'SDIFF s1 s2'
                ]}
            />
            <StructurePoint
                title='Списки'
                desc={[
                    'Список это последовательность значений упорядоченных по порядку их создания. Аналог двух-стороннего стека в который можно добавлять с двух сторон. Списки обычно применяются для создания очередей. Команда добавления элемента в список LPUSH.',
                    'LRANGE возвращает срез списка с левой стороны. Указание -1 означает до конца списка.',
                    'LPOP вернуть одно значение c левой стороны и удалить его из списка:',
                    'Аналогичные команды RPUSH, RRANGE, RPOP только для правой стороны.'


                ]}
                example={[
                    'LPUSH list value',
                    'LRANGE list start end',
                    'LPOP list',
                    'RPUSH list value'
                ]}
            />
            <StructurePoint
                title='Строки'
                desc={[
                    'В Redis строки представляют собой самый простой тип данных, они могут содержать любые данные, например, текст, JSON или бинарные данные.',
                    'INCR: Увеличивает значение ключа на 1. Если значение не является целым числом, будет выведена ошибка.',
                    'DECR: Уменьшает значение ключа на 1. Если значение не является целым числом, будет выведена ошибка.',
                    'APPEND: Добавляет указанное значение в конец значения ключа. Если ключ не существует, он будет создан с начальным значением равным переданному значению.',
                    'STRLEN: Возвращает длину значения ключа. Если ключ не существует, возвращается 0.',
                    'SETNX: Устанавливает значение ключа только в том случае, если ключ еще не существует. Если ключ существует, операция не выполняется.',
                    'GETSET: Устанавливает указанное значение и возвращает предыдущее значение, связанное с ключом. Если ключ не существует, возвращается nil.',


                ]}
                example={[
                    'SET key value',
                    'INCR key',
                    'DECR key',
                    'APPEND key value',
                    'STRLEN key',
                    'SETNX key value',
                    'GETSET key value',
                ]}
            />

        </div>
     );
}
 
