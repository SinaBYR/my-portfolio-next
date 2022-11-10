import classes from './navbar.module.scss';
import { useState } from 'react';
import { NavLinks } from './navLinks/navLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, Link } from '../Utilities';
import { Menu } from './menu/menu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuClickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={classes.navbar}>
      <nav className={classes.navbarWrapper}>
        <Burger open={isMenuOpen} click={menuClickHandler}/>
        <Menu open={isMenuOpen}/>
        <h1 className={classes.logo}>Sina Beyraghdar</h1>
        <ul className={classes.links}>
          {/* <NavLinks /> */}
        </ul>
        <Link
          mode="secondary"
          href="https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">Resume</Link>
      </nav>
    </header>
  )
}