import classes from './showcase.module.scss';
import { useState, useEffect } from 'react';
import { Project } from '../projects/project/project';
import { axios } from '../../axios/axios';
// import { ScaleLoader } from 'react-spinners';
import { ErrorMessage, Link } from '../Utilities';
import { ReducedProject } from './reducedProject/reducedProject';

export function Showcase() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchProjects = async () => {
    setError(null)
    setLoading(true)
    try {
        const response = await axios.get('/projects')
        const data: any = await response.data
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

  let display = projects?.map(({
    _id,
    title,
    code,
    demo,
    description,
    tech,
    preview
  }) => {
    return (
      <Project
        key={_id}
        title={title}
        code={code}
        demo={demo}
        description={description}
        tech={tech}
        preview={preview}
      />
    )
  })

  return (
    <main className={classes.showcase}>
      <div className={classes.showcaseWrapper}>
        <h2>Latest Projects</h2>
        <div className={classes.projects}>
          {
            // error
            // ?
            // <ErrorMessage>{error}</ErrorMessage>
            // :
            //   loading
            //   ?
            //   <div style={{textAlign: 'center'}}>
            //       {/* <ScaleLoader color={!dark ? colors.dark.secondary : colors.light.primary}/> */}
            //   </div>
            //   :
            //   display
          }

          {/* <ReducedProject
            description="description"
            preview="preview"
            tech={["tech1", "tech2"]}
            title="title"/> */}
          {/* <ReducedProject
            description="description"
            preview="preview"
            tech={["tech1", "tech2"]}
            title="title"/> */}
        </div>
        <div className={classes.linkWrapper}>
          <Link href="/projects">See more projects</Link>
        </div>
      </div>
    </main>
  )
}