import classes from './Project.module.css';
import { BiLinkExternal } from 'react-icons/bi';
import { PrimaryLink, SecondaryLink } from '../../Utilities';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../../../dark-mode-future/theme-context';
import { colors } from '../../../color-palette/color-palette';

const Project = () => {
    const dark = useContext(ThemeContext)
    const classNames = [classes.Project, dark ? classes.Dark : null].join(' ')

    return (
        <section
            className={classNames}
            style={{backgroundColor: dark ? colors.dark.primary : colors.light.secondary}}>
            <div>
                <h2>Spotify API Dashboard</h2>
                <div className={classes.MobilePreview}></div>
                <div className={classes.Links}>
                    {
                        dark
                        ?
                        <>
                            <SecondaryLink>Demo <BiLinkExternal /></SecondaryLink>
                            <SecondaryLink>Code <BiLinkExternal /></SecondaryLink>
                        </>
                        :
                        <>
                            <PrimaryLink>Demo <BiLinkExternal /></PrimaryLink>
                            <PrimaryLink>Code <BiLinkExternal /></PrimaryLink>
                        </>
                    }
                </div>
                <p className={classes.Description}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className={classes.Technologies}>
                    <h3>Technologies</h3>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>React.js</li>
                        <li>Spotify API</li>
                        <li>Axios package</li>
                        <li>Uploaded on Netlify</li>
                    </ul>
                </div>
            </div>
            <div className={classes.DesktopPreview}></div>
        </section>
    )
}

export { Project }