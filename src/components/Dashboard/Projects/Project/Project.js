import classes from './Project.module.css';
import { SecondaryLink } from '../../../Utilities';

const Project = ({ title, projectID }) => {
    return (
        <div className={classes.Project}>
            <p>{title}</p>
            <div className={classes.Controllers}>
                <SecondaryLink to={"/" + projectID}>Edit</SecondaryLink>
            </div>
        </div>
    )
}

export { Project }