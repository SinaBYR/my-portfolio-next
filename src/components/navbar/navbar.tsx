import classes from './navbar.module.scss';
import { useState } from 'react';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, Link } from '../Utilities';
import { Menu } from './Menu/Menu';
import { useContext } from 'react';
import { ThemeContext } from '../../dark-mode-future/theme-context';
import { colors } from '../../color-palette/color-palette';
import { DarkModeCheckbox } from './DarkModeCheckbox/DarkModeCheckbox';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const darkMode = useContext(ThemeContext);

  function menuClickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={classes.navbar} style={{backgroundColor: darkMode ? colors.dark.secondary : colors.light.primary}}>
      <nav className={classes.navbarWrapper}>
        <Burger open={isMenuOpen} click={menuClickHandler}/>
        <Menu open={isMenuOpen}/>
        <h1 className={classes.logo}>Sina Beyraghdar</h1>
        <div className={classes.darkMode}>
          <DarkModeCheckbox />
        </div>
        <ul className={classes.links}>
          {/* <NavLinks /> */}
        </ul>
        {/* {
          darkMode
          ?
          <Link href="https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume </Link>
          :
          <Link mode="secondary" href="https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume </Link>
        } */}
      </nav>
    </header>
  )
}