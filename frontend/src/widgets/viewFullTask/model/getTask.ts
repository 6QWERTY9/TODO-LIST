import type { TaskCardProps } from "@entities/TaskCard";

export function getTask(arr: TaskCardProps[], id: string): TaskCardProps | null {
    arr.map((task) => {
        if (task.id === id) {
            return task;
        }
    })

    return null;
}