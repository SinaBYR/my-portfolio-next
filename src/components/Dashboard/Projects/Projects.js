import { useState, useEffect } from 'react';
import { Spinner } from '../../Utilities';
import { Project } from './Project/Project';
import classes from './Projects.module.css';
import axios from '../../../axios/axios';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setProjects([1, 2, 3])
    //         setLoading(false)
    //     }, 2000)
    // }, [])

    const fetchProjects = async () => {
        setLoading(true)
        try {
            const response = await axios.get('/projects?titleOnly=true')
            const data = await response.data
            console.log(data)
            setProjects(data)
            setLoading(false)
        } catch(err) {
            console.log(err)
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
            {
                loading
                ?
                <Spinner color="#f7f7f7"/>
                :
                display
            }
        </div>
    )
}

export { Projects }