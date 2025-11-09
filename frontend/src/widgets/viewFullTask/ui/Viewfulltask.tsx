import type { ViewFullTaskProps } from "../model";

import css from './index.module.scss';

export const ViewFullTask: React.FC<ViewFullTaskProps> = ({task, onDeleteTask}) => {
  
  return (
    <section className={css.task_details}>
      <div className={css.task_details_content}>
        <div className={css.task_details_text_content}>
          <h1 className={css.task_details_title}>{task.title}</h1>
          <p className={css.task_details_priority}>Приоритет: <span>{task.priority}</span></p>
          <p className={css.task_details_status}>Статус: <span>{task.status}</span></p>
          <span className={css.task_details_create_date}>{task.createDate}</span>

          <div className={css.task_details_description}>
            {task.description}
          </div>
        </div>
      </div>

      <div className={css.task_details_button}>
        <button onClick={() => onDeleteTask(task.id)}>удалить</button>
      </div>
    </section>
  )
}
