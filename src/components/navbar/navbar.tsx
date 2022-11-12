import classes from './navbar.module.scss';
import { useEffect, useState } from 'react';
import { NavLinks } from './navLinks/navLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, Link, Logo } from '../Utilities';
import { Menu } from './menu/menu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // isShrunk is used to shrink or unshrink the navbar. It also determines <Logo /> component's fontSize prop.
  const [isShrunk, setIsShrunk] = useState(false);

  function menuClickHandler() {
    setIsMenuOpen(state => !state);
  }

  function onScrollHandler() {
    setIsShrunk((isShrunk) => {
      if(
        !isShrunk &&
        (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
      ) {
        return true;
      }

      if(
        isShrunk &&
        (document.body.scrollTop < 5 && document.documentElement.scrollTop < 5)
      ) {
        return false;
      }

      return isShrunk;
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
    return () => window.removeEventListener('scroll', onScrollHandler);
  }, [])

  return (
    <header className={[classes.header, isShrunk ? classes.shrunk : null].join(' ')}>
      <nav className={classes.navbar}>
        <Burger open={isMenuOpen} click={menuClickHandler}/>
        <Menu open={isMenuOpen}/>
        {/* <h1 className={classes.logo}>Sina Beyraghdar</h1> */}
        {/* {isShrunk ? 'true' : 'false'} */}
        <div className={classes.logoWrapper}>
          {/* <Image src={LogoImageSrc} layout="fill"/> */}
          <Logo fontSize={isShrunk ? '1.2rem' : '1.6rem'}/>
        </div>

        {/* <ul className={classes.links}>
          <NavLinks />
        </ul> */}
        {/* <Link
          mode="secondary"
          href="https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">Resume</Link> */}
      </nav>
    </header>
  )
}