import { Project } from './Project/Project';
import classes from './Projects.module.css';

const Projects = () => {
    return (
        <div className={classes.Projects}>
            <Project />
            <Project />
        </div>
    )
}

export { Projects }