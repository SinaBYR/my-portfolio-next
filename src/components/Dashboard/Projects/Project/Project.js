import { SecondaryLink, WarningButton } from '../../../Utilities';
import classes from './Project.module.css';

const Project = (props) => {
    return (
        <div className={classes.Project}>
            <p>Spotify API</p>
            <div className={classes.Controllers}>
                <SecondaryLink>Update</SecondaryLink>
                <WarningButton>Delete</WarningButton>
            </div>
        </div>
    )
}

export { Project }