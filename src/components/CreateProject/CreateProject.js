import classes from './CreateProject.module.css';
import { Form } from './Form/Form';

const CreateProject = () => {
    const create = data => {
        console.log(data)
    }

    return (
        <div className={classes.CreateProject}>
            <div className={classes.CreateProjectWrapper}>
                <h2>Create Project</h2>
                <Form create={create}/>
            </div>
        </div>
    )
}

export { CreateProject }