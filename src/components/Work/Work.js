import classes from './Work.module.css';
import { PrimaryButton } from '../Utilities/Buttons/PrimaryButton/PrimaryButton';
import { BiLinkExternal } from 'react-icons/bi';
import { PrimaryLink } from '../Utilities/Links/PrimaryLink/PrimaryLink';

const Work = props => {
    return (
        <main className={classes.Work}>
            <div className={classes.WorkWrapper}>
                <h2>My Work</h2>
                <div className={classes.Projects}>
                    <section className={classes.Project}>
                        <div>
                            <h2>Spotify API Dashboard</h2>
                            <div className={classes.Links}>
                                <PrimaryLink>Demo <BiLinkExternal /></PrimaryLink>
                                <PrimaryLink>Code <BiLinkExternal /></PrimaryLink>
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
                        <div className={classes.Preview}></div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export { Work }