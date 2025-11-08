import { useState } from "react"
import { SideBarItem } from "./components/SideBarItem"

import css from './index.module.scss';

const sideBarNavItems = [
  {id: 'my_task', title: 'Список задач', icon: './icons/task.svg', route: '/'}
]
export const SideBar = () => {
  const [activeItemId, setActiveItemId] = useState<string | null>('my_task');

  const handleItemClick = (id: string) => {
    setActiveItemId(id);
  };
  
  return (
    <nav className={css.sidebar_nav}>
      <div className={css.sidebar_nav_content}>
        {sideBarNavItems.map((item) => (
          <SideBarItem 
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            route={item.route}
            isSelect={activeItemId === item.id}
            onClick={handleItemClick}
          />
        ))}
      </div>
    </nav>
  )
}
