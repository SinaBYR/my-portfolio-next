import classes from './Menu.module.css';
import { useContext } from 'react';
import { NavLinks } from '../NavLinks/NavLinks';
import { DarkModeCheckbox } from '../DarkModeCheckbox/DarkModeCheckbox';
import { ThemeContext } from '../../../dark-mode-future/theme-context';
import { colors } from '../../../color-palette/color-palette';

const Menu = ({ open }) => {
    const dark = useContext(ThemeContext)
    const classNames = [classes.Menu, open ? classes.Open : null].join(' ')
    return (
        <div
            className={classNames}
            style={{
                backgroundColor: dark ? colors.dark.secondary : colors.light.secondary
            }}>
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