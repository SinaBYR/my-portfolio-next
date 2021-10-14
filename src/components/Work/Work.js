import classes from './Work.module.css';
import { Project } from './Project/Project';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../../dark-mode-future/theme-context';
import { colors } from '../../color-palette/color-palette';

const Work = () => {
    const dark = useContext(ThemeContext)

    return (
        <main className={classes.Work} style={{backgroundColor: dark ? colors.dark.secondary : colors.light.primary}}>
            <div className={classes.WorkWrapper}>
                <h2>My Work</h2>
                <div className={classes.Projects}>
                    <Project />
                    <Project />
                </div>
            </div>
        </main>
    )
}

export { Work }