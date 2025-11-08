export interface TaskCardProps {
    title: string;
    shortDesc: string;
    priority: 'Срочный' | 'Умеренный' | 'Низкий';
    status: 'Выполнено' | 'В процессе' | 'Не начато';
    createDate: string;
    id?: string;
    onClick?: () => void;
}