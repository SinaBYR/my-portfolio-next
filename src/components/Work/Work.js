import { Project } from './Project/Project';
import classes from './Work.module.css';


const Work = props => {
    return (
        <main className={classes.Work}>
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