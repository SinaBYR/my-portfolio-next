import classes from './Navbar.module.css';
import { useState } from 'react/cjs/react.development';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, PrimaryLink, DarkModeCheckbox } from '../Utilities';
import { Menu } from './Menu/Menu';
import { useContext } from 'react';
import { ThemeContext } from '../../dark-mode-future/theme-context';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dark = useContext(ThemeContext)

    const menuClickHandler = () => setIsMenuOpen(!isMenuOpen);

    // console.log('Navbar: ', dark)
    return (
        <header className={classes.Navbar} style={{backgroundColor: dark ? '#1e262c' : '#f7f7f7'}}>
            <nav className={classes.NavbarWrapper}>
                <Burger open={isMenuOpen} click={menuClickHandler}/>
                <Menu open={isMenuOpen}/>
                <h1 className={classes.Logo}>Sina Beyraghdar</h1>
                <div className={classes.DarkMode}>
                    <DarkModeCheckbox />
                </div>
                <ul className={classes.Links}>
                    <NavLinks />
                </ul>
                <PrimaryLink>Resume <BsDownload /></PrimaryLink>
            </nav>
        </header>
    )
}

export { Navbar }