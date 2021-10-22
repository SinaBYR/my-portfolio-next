import { SecondaryLink, WarningButton } from '../../../Utilities';
import classes from './Project.module.css';

const Project = ({ title, key }) => {
    return (
        <div className={classes.Project} key={key}>
            <p>{title}</p>
            <div className={classes.Controllers}>
                <SecondaryLink>Update</SecondaryLink>
                {/* <WarningButton>Delete</WarningButton> */}
            </div>
        </div>
    )
}

export { Project }