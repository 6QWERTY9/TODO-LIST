import { useEffect, useState } from "react";
import { TaskCard, type TaskCardProps } from "@entities/TaskCard";
import { getAllSavedTask } from "@shared/util/localStorageUtils";
import { mapTaskDataToCardProps } from "@shared/util";
import { CreateTask } from "@features/createTask";

export const TaskSection = () => {
  const [tasks, setTasks] = useState<TaskCardProps[]>([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleOpen = () => {
    setShowAddTask(true);
  }
  const handleClose = () => {
    setShowAddTask(false);
  }
  
  useEffect(() => {
    const rawDataArray = getAllSavedTask();

    const formattedTasks = rawDataArray.map(mapTaskDataToCardProps);

    setTasks(formattedTasks);
  }, []);

  
  return (
    <section>
      <div>
        <span>Задачи</span>
        <button onClick={handleOpen}>Добавить задачу</button>
      </div>

      <div>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard key={task.id} {...task}/>
          ))
        ) : (
          <p>Нет текущих задач для отображения.</p>
        )}
      </div>
      <CreateTask open={showAddTask} onClose={handleClose}/>
    </section>
  )
}
