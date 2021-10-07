import { PrimaryButton } from '../Utilities/Buttons/PrimaryButton/PrimaryButton';
import classes from './Navbar.module.css';
import { NavLinks } from './NavLinks/NavLinks';
import { BsDownload } from 'react-icons/bs';

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
                <PrimaryButton>Resume <BsDownload /></PrimaryButton>
            </nav>
        </header>
    )
}

export { Navbar }