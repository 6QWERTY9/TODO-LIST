import type { TaskData } from "@features/createTask";

const STORAGE_KEY = 'allTask';

export function getAllSavedTask(): TaskData[] {
    const savedDataString = localStorage.getItem(STORAGE_KEY);

    if (savedDataString) {
        try {
            const dataArray: TaskData[] = JSON.parse(savedDataString);
            return dataArray
        } catch(error) {
            console.error("Ошибка при парсинге данных из localStorage:", error);
            return [];
        }
    }

    return []
}

export function saveAllTasks(tasks: TaskData[]): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Ошибка при сохранении в localStorage:", error);
    }
}