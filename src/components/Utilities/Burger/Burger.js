import { useContext } from 'react/cjs/react.development';
import { colors } from '../../../color-palette/color-palette';
import { ThemeContext } from '../../../dark-mode-future/theme-context';
import classes from './Burger.module.css';

const Burger = ({styles, open, click}) => {
    const dark = useContext(ThemeContext)
    const classNames = [classes.Burger, open ? classes.Open : null].join(' ');

    return (
        <div className={classNames} onClick={click}>
            <div style={{
                backgroundColor: dark ? colors.primary : colors.secondary
            }}></div>
            <div style={{
                backgroundColor: dark ? colors.primary : colors.secondary
            }}></div>
            <div style={{
                backgroundColor: dark ? colors.primary : colors.secondary
            }}></div>
        </div>
    )
}

export { Burger }