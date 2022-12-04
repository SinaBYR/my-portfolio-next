import classes from './showcase.module.scss';
import { CustomError, Link } from '../utilities';
import { ReducedProject } from './reducedProject/reducedProject';
import { ReducedProjectType, Technology } from '../../types/types';
import { BsFiles } from 'react-icons/bs';

interface Props {
  projects: ReducedProjectType[]
  technologies: Technology[]
}

export function Showcase({ projects, technologies }: Props) {
  return (
    <main className={classes.showcase}>
      <div className={classes.wrapper}>
        <h2>Latest Projects</h2>
        {
          !projects.length ?
          <CustomError
            style={{ color: 'gray', paddingTop: '2rem' }}
            title="Sorry, no result was found."
            icon={<BsFiles style={{
              width: "80px",
              height: "80px",
            }}/>}
            />
          :
          <>
            <div className={classes.projects}>
              {projects.map(p => {
                const techArray = technologies.filter(t => t.p_id === p.id).map(t => t.name);
                return (
                  <ReducedProject 
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    preview="/img/babel.png"
                    key={p.id}
                    tech={techArray}/>
                )
              })}
            </div>
            <div className={classes.linkWrapper}>
              <Link href="/projects">See more projects</Link>
            </div>
          </>
        }
      </div>
    </main>
  )
}