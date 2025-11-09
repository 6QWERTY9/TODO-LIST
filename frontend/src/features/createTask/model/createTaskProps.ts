import type { TaskData } from "./taskData";
export interface CreateTaskProps {
    open: boolean;
    onClose: () => void;
    onSubmitSuccess: (taskData: TaskData) => void;
}