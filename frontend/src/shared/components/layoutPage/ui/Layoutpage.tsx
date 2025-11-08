import { Header } from "@shared/components/header";

import css from './index.module.scss';
import { SideBar } from "@widgets/SideBar";

interface LayoutPageProps {
  children: React.ReactNode
}

export const LayoutPage: React.FC<LayoutPageProps> = ({children}) => {
  return (
    <div className={css.layout}>
      <Header/>
      <div className={css.middle_content}>
        <SideBar/>
        <main>
          {children}
        </main>
      </div>
    </div>

  )
}
