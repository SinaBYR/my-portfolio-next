import classes from './Navbar.module.css';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';
import { PrimaryLink } from '../Utilities';

const Navbar = props => {
    return (
        <header className={classes.Navbar}>
            <nav className={classes.NavbarWrapper}>
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