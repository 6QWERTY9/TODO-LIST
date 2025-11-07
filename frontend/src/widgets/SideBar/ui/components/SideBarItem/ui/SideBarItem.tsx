import css from './index.module.scss';
import type { SideBarItemProps } from '../model';

import clsx from 'clsx';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';


export const SideBarItem: React.FC<SideBarItemProps> = ({icon,id,isSelect, title, onClick, route}) => {
  const handleClick = () => {
    onClick(id)
  }
  return (

    <Link to={route} className={clsx(css.sidebar_item, {[css.select]: isSelect})} id={id} onClick={handleClick}>
      <ReactSVG src={icon}/>
      <span className={css.sidebar_item_title}>{title}</span>
    </Link>
  )
}
