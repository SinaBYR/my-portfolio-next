import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from '../../../axios/axios';
import { EditForm } from './EditForm/EditForm';
import { ScaleLoader } from 'react-spinners';
import { ErrorMessage } from '../../Utilities';

const Edit = () => {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { projectID } = useParams()
    const history = useHistory()

    const updateProject = async (payload) => {
        setLoading(true)
        try {
            const response = await axios.patch('/projects/' + projectID, payload)
            const data = await response.data
            setProject(data)
            setLoading(false)
            if(response.status === 200) {
                history.replace('/')
            }
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    const deleteProject = async () => {
        
    }
    
    useEffect(() => {
        const fetchProject = async () => {
            setError(null)
            // setLoading(true)
            try {
                const response = await axios.get('/projects/' + projectID)
                const data = await response.data
                console.log(data)
                setProject(data)
                // setLoading(false)
            } catch(err) {
                console.log(err)
                setError(err)
                // setLoading(false)
            }
        }
        fetchProject()
    }, [projectID])

    return (
        <div>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            {!error && <EditForm submit={updateProject} deleteProject={deleteProject} preData={project} loading={loading} error={error}/>}
        </div>
    )
}

export { Edit }