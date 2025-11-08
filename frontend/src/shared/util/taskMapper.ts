import type { TaskData } from "./getSavedTaskData";
import type { TaskCardProps } from "@entities/TaskCard/model/taskCardProps";

export function mapTaskDataToCardProps(rawData: TaskData): TaskCardProps {
    let priority: TaskCardProps['priority'] = 'Низкий';

    if (rawData.isExtreme) {
        priority = 'Срочный';
    } else if (rawData.isModerate) {
        priority = 'Умеренный';
    }

    return {
        title: rawData.title,
        shortDesc: rawData.shortDesc,
        priority: priority,
        status: 'Не начато',
        createDate: new Date().toLocaleDateString()
    }
}