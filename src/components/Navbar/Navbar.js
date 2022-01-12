import classes from './Navbar.module.css';
import { useState } from 'react';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, PrimaryAnchor, SecondaryAnchor } from '../Utilities';
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
        <header className={classes.Navbar} style={{backgroundColor: dark ? colors.dark.secondary : colors.light.primary}}>
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
                    <SecondaryAnchor href="#" target="_blank" rel="noopener noreferrer">Resume <BsDownload /></SecondaryAnchor>
                    :
                    <PrimaryAnchor href="#" target="_blank" rel="noopener noreferrer">Resume <BsDownload /></PrimaryAnchor>
                }
            </nav>
        </header>
    )
}

export { Navbar }