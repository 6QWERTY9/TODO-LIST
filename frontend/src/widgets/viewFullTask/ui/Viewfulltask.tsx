import { useState } from "react";
import type { ViewFullTaskProps } from "../model";

import css from './index.module.scss';
import clsx from "clsx";
import { ReactSVG } from "react-svg";


const priorityClassName = {'Срочный': 'extreme','Умеренный': 'moderate','Низкий': 'low'};

export const ViewFullTask: React.FC<ViewFullTaskProps> = ({task, onDeleteTask, onChangeStatus}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const items = ['Выполнено', 'В процессе', 'Не начато'] as const;

  const toggleDrowdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: typeof items[number]) => {
    // Вместо обновления локального состояния вызываем функцию родителя
    // setSelectedItem(item); 
    onChangeStatus(task.id!, item); // Вызываем функцию родителя
    setIsOpen(false);
  }


  

  
  return (
    <section className={css.task_details}>
      <div className={css.task_details_content}>
        <div className={css.task_details_text_content}>
          <div className={css.task_details_text_content_top}>

            <h1 className={css.task_details_title}>{task.title}</h1>
            <p className={css.task_details_priority}>Приоритет: <span className={css[priorityClassName[task.priority]]}>{task.priority}</span></p>
            <div className={clsx(css.task_details_status_dropdown_wrap, {[css.visible]: isOpen})} >
              <div className="status">
                <span>
                  Статус: <span className={css[`status_${task.status.replace(' ', '_').toLowerCase()}`]}>
                {task.status} 
              </span>
                </span>
              </div>
              <button className={clsx(css.open_dropdown, {[css.drowdown_open]: isOpen})} onClick={toggleDrowdown}><ReactSVG src="./icons/arrow.svg"/></button>
              {isOpen && (
                <ul className={css.task_details_drowdown}>
                {items.map(item => (
                  <li key={Date.now.toString()} onClick={() => handleItemClick(item)} className={css.drowdown_item}>
                    <span>
                        {item}
                    </span>
                  </li>
                ))}
              </ul>
              )}
            </div>
            <span className={css.task_details_create_date}>Создан: {task.createDate}</span>
          </div>

          <div className={css.task_details_description}>
            <p>
              {task.description}
            </p>
          </div>
        </div>
        <div className={css.task_details_button}>
          <button onClick={() => onDeleteTask(task.id)} className={css.delete_button}><ReactSVG src="./icons/del.svg"/></button>
        </div>
      </div>
    </section>
  )
}
