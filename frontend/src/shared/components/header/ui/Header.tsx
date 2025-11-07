import { getDate, getDayName } from '../config';
import css from './index.module.scss';


export const Header = () => {
  return (
    <header className={css.header_conteiner}>
      <div className={css.header_content}>
        <Logo/>

        <div className={css.header_date}>
          <DayName/>
          <Date/>
        </div>
      </div>
    </header>
  )
}

const Logo = () => {
  return (
    <div className={css.logo_conteiner}>
      <span>to</span>-do
    </div>
  )
}

const Date = () => {
  const date = getDate();

  return (
    <span className={css.header_date}>{date}</span>
  )
}

const DayName = () => {
  const dayName = getDayName();

  return (
    <span className={css.header_day_name}>{dayName}</span>
  )
}
