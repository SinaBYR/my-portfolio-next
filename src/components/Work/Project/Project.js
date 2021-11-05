import classes from './Project.module.css';
import { useContext } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { PrimaryLink, SecondaryLink } from '../../Utilities';
import { ThemeContext } from '../../../dark-mode-future/theme-context';
import { colors } from '../../../color-palette/color-palette';

const Project = ({ title, code, demo, description, tech, preview }) => {
    const dark = useContext(ThemeContext)
    const classNames = [classes.Project, dark ? classes.Dark : null].join(' ')

    return (
        <section
            className={classNames}
            style={{backgroundColor: dark ? colors.dark.primary : colors.light.secondary}}>
            <div>
                <h2>{title}</h2>
                <div className={classes.MobilePreview}>
                    <img src={preview} alt="project-preview-screenshot"/>
                </div>
                <div className={classes.Links}>
                    {
                        dark
                        ?
                        <>
                            <SecondaryLink to={demo} target="_blank" rel="noopener noreferrer">Demo <BiLinkExternal /></SecondaryLink>
                            <SecondaryLink to={code} target="_blank" rel="noopener noreferrer">Code <BiLinkExternal /></SecondaryLink>
                        </>
                        :
                        <>
                            <PrimaryLink to={demo} target="_blank" rel="noopener noreferrer">Demo <BiLinkExternal /></PrimaryLink>
                            <PrimaryLink to={code} target="_blank" rel="noopener noreferrer">Code <BiLinkExternal /></PrimaryLink>
                        </>
                    }
                </div>
                <p className={classes.Description}>{description}</p>
                <div className={classes.Technologies}>
                    <h3>Technologies</h3>
                    <ul>
                        {tech.map(value => <li key={value}>{value}</li>)}
                    </ul>
                </div>
            </div>
            <div className={classes.DesktopPreview}>
                <img src={preview} alt="project-preview-screenshot"/>
            </div>
        </section>
    )
}

export { Project }