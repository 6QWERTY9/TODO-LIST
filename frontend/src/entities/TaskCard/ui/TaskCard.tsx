import clsx from 'clsx';
import type { TaskCardProps } from '../model';
import css from './index.module.scss';
import { useState } from 'react';


const statusClassName = {'Выполнено': 'done', 'В процессе': 'in_progress', 'Не начато': 'not_started'};
const priorityClassName = {'Срочный': 'extreme','Умеренный': 'moderate','Низкий': 'low'};

export const TaskCard: React.FC<TaskCardProps> = ({ title, shortDesc, status, priority, id, onClick, createDate }) => {
    const [isCardFocus, setCardFocus] = useState(false);
    

    const handleCard = () => {
      setCardFocus(!isCardFocus)
      if (onClick) { // <-- Проверка наличия пропса
        onClick(id!);
      }
    }
    return (
      <div className={clsx(css.task_card_wrapper, {[css.focus]: isCardFocus})} onClick={handleCard} id={id} role='button'>
        <div className={css.task_card_content}>
          
          <div className={clsx(css.priority_circle, css[priorityClassName[priority]])}></div>

          <div className={css.task_card_text_content}>
            <h4 className={css.task_card_title}>{title}</h4>
            <p className={css.task_card_short_desc}>{shortDesc}</p>
          </div>

          <div className={css.task_card_progress}>
            <div className={css.priority_wrapper}>
              <span className={css.task_card_priority}>Приоритет: <span className={css[priorityClassName[priority]]}>{priority}</span></span>
            </div>
            <div className={css.status_wrapper}>
              <span className={css.task_card_status}>Статус: <span className={css[statusClassName[status]]}>{status}</span></span>
            </div>
            <div className={css.date_wrapper}>
              <span className={css.task_card_date}>
                Создана: {createDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};
