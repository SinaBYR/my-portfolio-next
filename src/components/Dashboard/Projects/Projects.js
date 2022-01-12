import classes from './Projects.module.css';
import { useState, useEffect } from 'react';
import { ErrorMessage } from '../../Utilities';
import { Project } from './Project/Project';
import { axios } from '../../../axios/axios';
import { ScaleLoader } from 'react-spinners';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const fetchProjects = async () => {
        setError(null)
        setLoading(true)
        try {
            const response = await axios.get('/projects?titleOnly=true')
            const data = await response.data
            setProjects(data)
            setLoading(false)
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    let display = projects.map(project => {
            return <Project title={project.title} projectID={project._id} key={project + Math.random()}/>
    })

    return (
        <div className={classes.Projects}>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            {
                loading
                ?
                <ScaleLoader color="#f7f7f7"/>
                :
                display
            }
        </div>
    )
}

export { Projects }