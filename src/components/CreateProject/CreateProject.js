import { useState } from 'react/cjs/react.development';
import classes from './CreateProject.module.css';
import { Form } from './Form/Form';

const CreateProject = () => {
    const [loading, setLoading] = useState(true)
    const create = data => {
        console.log(data)
    }

    return (
        <div className={classes.CreateProject}>
            <div className={classes.CreateProjectWrapper}>
                <h2>Create Project</h2>
                <Form create={create} loading={loading}/>
            </div>
        </div>
    )
}

export { CreateProject }