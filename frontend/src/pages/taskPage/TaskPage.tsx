import { useCallback, useEffect, useState } from "react";

import type { TaskCardProps } from "@entities/TaskCard";
import { type TaskData } from "@features/createTask";

import { LayoutPage } from "@shared/components/layoutPage"
import { TaskSection } from "@widgets/taskSection";

import { mapTaskDataToCardProps } from "@shared/util";
import { getAllSavedTask, saveAllTasks } from "@shared/util/localStorageUtils";
import { ViewFullTask } from "@widgets/viewFullTask";

import css from './index.module.scss'

export const TaskPage = () => {
    const [tasks, setTasks] = useState<TaskCardProps[]>([]);

    const [showAddTask, setShowAddTask] = useState(false);

    const [selectedTask, setSelectedTask] = useState<TaskCardProps | null>(null);

    console.log(tasks);

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

    const handleTaskSubmit = useCallback((newTaskData: TaskData) => {
        const updateRawTasks = [...getAllSavedTask(), newTaskData];
        saveAllTasks(updateRawTasks);

        const newCardProps = mapTaskDataToCardProps(newTaskData);
        setTasks(prevTasks => [...prevTasks, newCardProps]);
    }, []);

    const handleTaskSelect = useCallback((id: string) => {
        const rawTask = getAllSavedTask();

        const taskDetails = rawTask.find(t => t.id === id);
        if (taskDetails) {
            const formmatedTaskDetails = mapTaskDataToCardProps(taskDetails);
            setSelectedTask(formmatedTaskDetails);
        }

    }, []);

    const handleDeletTask = useCallback((id:string) => {
        const rawData = getAllSavedTask();

        const updateRawData = rawData.filter((task => task.id !== id));

        saveAllTasks(updateRawData);

        const updatedFormmattedData = updateRawData.map(mapTaskDataToCardProps);

        setTasks(updatedFormmattedData);

        setSelectedTask(prevTask => (prevTask?.id === id ? null : prevTask));
    }, [])
    return (
        <LayoutPage>
            <div className={css.content_wrapper}>
                <TaskSection 
                    onOpen={handleOpen}
                    onClose={handleClose} 
                    onSubmitSuccess={handleTaskSubmit} 
                    open={showAddTask} 
                    tasks={tasks} 
                    onTaskSelect={handleTaskSelect}
                />

                {selectedTask && (
                    <ViewFullTask task={selectedTask} onDeleteTask={handleDeletTask}/>
                )}
            </div>
        </LayoutPage>
    )
}