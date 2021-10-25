import { Form } from '../Form/Form';
import classes from './Create.module.css';

const Create = ({ create, loading }) => {

    return (
        <div className={classes.Create}>
            <Form submit={create} loading={loading}/>
        </div>
    )
}

export { Create }