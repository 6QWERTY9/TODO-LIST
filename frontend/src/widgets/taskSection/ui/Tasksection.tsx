
import { TaskCard, type TaskCardProps } from "@entities/TaskCard";

import { CreateTask, type TaskData } from "@features/createTask";

import css from './index.module.scss';
import { ReactSVG } from "react-svg";
import clsx from "clsx";

interface TaskSectionProps {
  tasks: TaskCardProps[];
  onOpen: () => void;
  onClose: () => void;
  onTaskSelect: (id: string) => void;
  onSubmitSuccess: (taskData: TaskData) => void;
  open: boolean;
}

export const TaskSection: React.FC<TaskSectionProps> = ({tasks, onClose,onOpen, onSubmitSuccess, open, onTaskSelect}) => {

  return (
    <section className={css.tasks_wrapper}>
      <div className={css.content}>
        <div className={css.tasks_top_content}>
          <span className={css.task_title}>Задачи</span>
          <button onClick={onOpen} className={css.add_button}><ReactSVG src="./icons/add.svg"/></button>
        </div>

        <div className={clsx(css.tasks_list, {[css.few_task]: tasks.length <= 4})}>
          {tasks.length > 0 ? (
            tasks.map(task => (
              <TaskCard key={task.id} {...task} onClick={onTaskSelect}/>
            ))
          ) : (
            <p>Нет текущих задач для отображения.</p>
          )}
        </div>
      </div>
      <CreateTask open={open} onClose={onClose} onSubmitSuccess={onSubmitSuccess}/>
    </section>
  )
}
