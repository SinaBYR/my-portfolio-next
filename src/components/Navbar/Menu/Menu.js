import classes from './Menu.module.css';
import { NavLinks } from '../NavLinks/NavLinks';

const Menu = ({ open }) => {
    const classNames = [classes.Menu, open ? classes.Open : null].join(' ')

    return (
        <div className={classNames}>
            <ul className={classes.Links}>
                <NavLinks mobile/>
            </ul>
            <div>Dark Mode</div>
        </div>
    )
}

export { Menu }