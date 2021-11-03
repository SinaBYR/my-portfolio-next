import classes from './Work.module.css';
import { useState, useContext, useEffect } from 'react';
import { Project } from './Project/Project';
import { ThemeContext } from '../../dark-mode-future/theme-context';
import { colors } from '../../color-palette/color-palette';
import { axios } from '../../axios/axios';
import { ScaleLoader } from 'react-spinners';
import { ErrorMessage } from '../Utilities';

const Work = () => {
    const dark = useContext(ThemeContext)
    const [projects, setProjects] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchProjects = async () => {
        setError(null)
        setLoading(true)
        try {
            const response = await axios.get('/projects')
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

    let display = projects.map(({ _id, title, code, demo, description, tech, preview}) => {
        return (
            <Project key={_id} title={title} code={code} demo={demo} description={description} tech={tech} preview={preview}/>
        )
    })

    return (
        <main
            className={classes.Work}
            style={{backgroundColor: dark ? colors.dark.secondary : colors.light.primary}}>
            <div className={classes.WorkWrapper}>
                <h2>My Work</h2>
                <div className={classes.Projects}>
                    {
                        error
                        ?
                        <ErrorMessage>{error.message}</ErrorMessage>
                        :
                            loading
                            ?
                            <div style={{textAlign: 'center'}}>
                                <ScaleLoader color={!dark ? colors.dark.secondary : colors.light.primary}/>
                            </div>
                            :
                            display
                    }
                </div>
            </div>
        </main>
    )
}

export { Work }