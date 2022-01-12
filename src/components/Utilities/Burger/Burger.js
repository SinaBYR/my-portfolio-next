import classes from './Burger.module.css';
import { useContext } from 'react';
import { colors } from '../../../color-palette/color-palette';
import { ThemeContext } from '../../../dark-mode-future/theme-context';

const Burger = ({styles, open, click}) => {
    const dark = useContext(ThemeContext)
    const classNames = [classes.Burger, open ? classes.Open : null].join(' ');

    return (
        <div className={classNames} onClick={click}>
            <div style={{
                backgroundColor: dark ? colors.light.primary : colors.dark.secondary
            }}></div>
            <div style={{
                backgroundColor: dark ? colors.light.primary : colors.dark.secondary
            }}></div>
            <div style={{
                backgroundColor: dark ? colors.light.primary : colors.dark.secondary
            }}></div>
        </div>
    )
}

export { Burger }