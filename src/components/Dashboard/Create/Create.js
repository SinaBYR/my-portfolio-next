import axios from '../../../axios/axios';
import { useState } from 'react';
import { Form } from '../Form/Form';
import classes from './Create.module.css';

const Create = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const createProject = async payload => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.post('/projects', payload)
            const data = await response.data
            console.log(response)
            console.log(data)
            setLoading(false)
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }
    return (
        <div className={classes.Create}>
            <Form submit={createProject} loading={loading} error={error}/>
        </div>
    )
}

export { Create }