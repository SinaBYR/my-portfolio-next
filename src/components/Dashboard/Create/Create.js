import axios from '../../../axios/axios';
import { CreateForm } from './CreateForm/CreateForm';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const history = useHistory()
    const createProject = async payload => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.post('/projects', payload)
            await response.data
            setLoading(false)
            if(response.status === 201) {
                history.replace('/')
            }
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }
    return (
        <div>
            <CreateForm submit={createProject} loading={loading} error={error}/>
        </div>
    )
}

export { Create }