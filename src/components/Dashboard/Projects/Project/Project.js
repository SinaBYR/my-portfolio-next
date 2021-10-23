import { SecondaryLink, WarningButton } from '../../../Utilities';
import classes from './Project.module.css';

const Project = ({ title }) => {
    return (
        <div className={classes.Project}>
            <p>{title}</p>
            <div className={classes.Controllers}>
                <SecondaryLink to="/">Update</SecondaryLink>
                {/* <WarningButton>Delete</WarningButton> */}
            </div>
        </div>
    )
}

export { Project }