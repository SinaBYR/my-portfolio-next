import { useState, useEffect } from 'react';
import { Spinner } from '../../Utilities';
import { Project } from './Project/Project';
import classes from './Projects.module.css';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setProjects([1, 2, 3])
            setLoading(false)
        }, 2000)
    }, [])

    let display = projects.map(project => {
        return <Project title="Spotify API" key={project}/>
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