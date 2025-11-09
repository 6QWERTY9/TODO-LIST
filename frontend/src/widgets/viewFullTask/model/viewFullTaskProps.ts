
import type { TaskCardProps } from "@entities/TaskCard";


export interface ViewFullTaskProps {
    task: TaskCardProps;
    onDeleteTask: (id: string) => void
}