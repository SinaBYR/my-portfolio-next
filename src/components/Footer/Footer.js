import classes from './Footer.module.css';
import { useContext } from 'react';
import { colors } from '../../color-palette/color-palette';
import { ThemeContext } from '../../dark-mode-future/theme-context';

const Footer = () => {
    const dark = useContext(ThemeContext)
    return (
        <footer
            className={classes.Footer}
            style={{backgroundColor: dark ? colors.dark.primary : colors.light.primary}}>
            <p>Developed by Sina Beyraghdar © 2021</p>
            <p className={classes.Photographer}>Pian delle Betulle, Italy. Photo by <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" style={{color: dark ? colors.light.primary : colors.dark.secondary}}>Alessio Soggetti</a> on <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" style={{color: dark ? colors.light.primary : colors.dark.secondary}}>Unsplash.</a>
            </p>
        </footer>
    )
}

export { Footer }