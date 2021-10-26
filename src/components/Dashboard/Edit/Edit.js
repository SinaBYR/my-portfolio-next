import classes from './Edit.module.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from '../../../axios/axios';
import { Form } from '../Form/Form';

const Edit = props => {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { projectID } = useParams()

    const updateProject = async () => {
        setLoading(true)
        try {
            const response = await axios.patch('/projects/' + projectID)
            const data = await response.data
            console.log(data)
            setProject(data)
            setLoading(false)
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get('/projects/' + projectID)
                const data = await response.data
                console.log(data)
                setProject(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchProject()
    }, [projectID])

    return (
        <div className={classes.Edit}>
            <Form submit={updateProject} loading={loading} error={error} initialData={project}/>
        </div>
    )
}

export { Edit }