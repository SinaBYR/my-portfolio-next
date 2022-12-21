import classes from './reducedProject.module.scss';
import { Link } from '../../utilities';
import Image from 'next/image';
import type { ReducedProjectType } from '../../../types/types';

export function ReducedProject({ id, title, description, thumbnail, techList }: ReducedProjectType) {
  return (
    <div className={classes.wrapper} key={id}>
      <div className={classes.preview}>
        <Image
          src={thumbnail || '/img/project_preview_fallback.png'}
          alt="project-preview-screenshot"
          layout="fill"/>
        <div className={classes.title}>{title}</div>
      </div>
      <div className={classes.content}>
        <div className={classes.tech}>
          {techList.map(val => <span key={val}>{val}</span>)}
        </div>
        <p>{description}</p>
        <Link variant="secondary" href={"/projects/" + id}>Read more</Link>
      </div>
    </div>
  )
}