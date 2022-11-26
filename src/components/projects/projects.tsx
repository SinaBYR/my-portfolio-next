import classes from './projects.module.scss';
import { ReducedProject } from '../showcase/reducedProject/reducedProject';
import { ReducedProjectType, Technology } from '../../types/types';

interface Props {
  projects: ReducedProjectType[];
  technologies: Technology[];
}

export function Projects({ projects, technologies }: Props) {
  return (
    <section className={classes.projects}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h2>Projects</h2>
        </div>
        <div className={classes.content}>
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
      </div>
    </section>
  )
}