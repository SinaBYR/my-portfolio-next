import classes from './Navbar.module.css';
import { useState } from 'react/cjs/react.development';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, PrimaryLink, SecondaryLink } from '../Utilities';
import { Menu } from './Menu/Menu';
import { useContext } from 'react';
import { ThemeContext } from '../../dark-mode-future/theme-context';
import { colors } from '../../color-palette/color-palette';
import { DarkModeCheckbox } from './DarkModeCheckbox/DarkModeCheckbox';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dark = useContext(ThemeContext)

    const menuClickHandler = () => setIsMenuOpen(!isMenuOpen);

    // console.log('Navbar: ', dark)
    return (
        <header className={classes.Navbar} style={{backgroundColor: dark ? colors.secondary : colors.primary}}>
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
                {
                    dark
                    ?
                    <SecondaryLink>Resume <BsDownload /></SecondaryLink>
                    :
                    <PrimaryLink>Resume <BsDownload /></PrimaryLink>
                }
            </nav>
        </header>
    )
}

export { Navbar }