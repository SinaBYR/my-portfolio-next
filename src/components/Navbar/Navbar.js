import classes from './Navbar.module.css';
import { useState } from 'react/cjs/react.development';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, PrimaryLink, DarkModeCheckbox } from '../Utilities';
import { Menu } from './Menu/Menu';

const Navbar = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClickHandler = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={classes.Navbar}>
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