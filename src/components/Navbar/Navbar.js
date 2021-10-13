import classes from './Navbar.module.css';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { Burger, PrimaryLink } from '../Utilities';
import { useState } from 'react/cjs/react.development';

const Navbar = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClickHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={classes.Navbar}>
            <nav className={classes.NavbarWrapper}>
                <Burger open={isMenuOpen} click={menuClickHandler}/>
                <div className={classes.Logo}>
                    <h1>Sina Beyraghdar</h1>
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