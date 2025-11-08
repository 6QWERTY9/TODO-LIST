import { TaskCard } from "@entities/TaskCard";
import { getSavedTaskData } from "@shared/util"

export const TaskSection = () => {
  const data = getSavedTaskData();
  return (
    <section>
      <span>Задачи</span>

      <div>
        
      </div>
    </section>
  )
}
