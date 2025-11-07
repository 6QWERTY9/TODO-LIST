export interface SideBarItemProps {
    icon: string;
    title: string;
    isSelect?: boolean;
    id: string;
    onClick: (id: string) => void;
    route: string
}