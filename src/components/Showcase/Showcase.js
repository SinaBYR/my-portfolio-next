import classes from './Showcase.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../dark-mode-future/theme-context';
import { colors } from '../../color-palette/color-palette';

const Showcase = () => {
    const dark = useContext(ThemeContext)

    return (
        <section className={classes.Showcase} style={{backgroundColor: dark ? colors.dark.primary : colors.light.secondary}}>
            <div className={classes.ShowcaseWrapper}>
                <h2>Hello, and welcome to my portfolio.</h2>
                <p>My name is Sina. I'm a front-end web developer and I make web applications.</p>
                <p>Check out my work in the next section.</p>
                {/* <p>Send me an email using form down below or message me in LinkedIn.</p> */}
                <p>Send me an email using the form in the last section or message me in LinkedIn.</p>
            </div>
        </section>
    )
}

export { Showcase }