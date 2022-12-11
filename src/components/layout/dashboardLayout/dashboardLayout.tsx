import classes from './dashboardLayout.module.scss'
import { useState } from 'react';
import { Sidebar } from "../../dashboard/sidebar/sidebar";
import { MobileHeader } from '../../dashboard/mobileHeader/mobileHeader';
import { SidebarLinks } from '../../dashboard/sidebarLinks/sidebarLinks';
import { useUser } from '../../../lib/useUser';

export default function DashboardLayout({ children }) {
  // Because this component is shared between every dashboard component,
  // then it'll redirect if user.isLoggedIn property returned by
  // useUser is set to false.
  useUser({
    redirectTo: '/login'
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function burgerClickHandler() {
    setIsMenuOpen(state => !state);
  }

  return (
    <main className={classes.dashboard}>
      <div className={classes.dashboardWrapper}>
        <MobileHeader isMenuOpen={isMenuOpen} onClickBurger={burgerClickHandler}/>
        <ul className={[classes.menu, isMenuOpen ? classes.open : null].join(' ')}>
          <SidebarLinks />
        </ul>
        <Sidebar />
        <section className={classes.workspace}>{children}</section>
      </div>
    </main>
  )
}