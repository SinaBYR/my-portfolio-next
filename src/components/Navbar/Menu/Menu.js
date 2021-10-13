import classes from './Menu.module.css';
import { NavLinks } from '../NavLinks/NavLinks';
import { DarkModeCheckbox } from '../../Utilities';

const Menu = ({ open }) => {
    const classNames = [classes.Menu, open ? classes.Open : null].join(' ')

    return (
        <div className={classNames}>
            <ul className={classes.Links}>
                <NavLinks mobile/>
            </ul>
            <div className={classes.DarkMode}>
                <span>Theme Mode</span>
                <DarkModeCheckbox />
            </div>
        </div>
    )
}

export { Menu }