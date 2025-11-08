export interface TaskData {
    title: string;
    shortDesc: string;
    isExtreme: boolean;
    isModerate: boolean;
    isLow: boolean;
    date: string;
    description: string;
}

export function getSavedTaskData(): TaskData | null {
    const savedDataString = localStorage.getItem('taskData');
    if (savedDataString) {
        // Преобразуем JSON-строку обратно в объект JavaScript
        try {
            const dataObject = JSON.parse(savedDataString);
            return dataObject;
        } catch (error) {
            console.error("Ошибка при парсинге данных из localStorage:", error);
            return null;
        }
    }
    return null;
}