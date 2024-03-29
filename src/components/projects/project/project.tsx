import classes from './project.module.scss';
import type { FullProjectType } from '../../../types/types';
import { MobileSidebar } from './sidebar/mobileSidebar/mobileSidebar';
import { Sidebar } from './sidebar/sidebar';
import { Carousel } from './carousel/carousel';

// project.id is redundant
export function Project ({  
  project
}: {
  project: FullProjectType
}): JSX.Element {
  const {
    title,
    description,
    demo_url,
    techList,
    created_at,
    repo,
    contributors,
    screenshots
  } = project;
  return (
    <section className={classes.project}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>{title}</h2>
          {screenshots.length ? <Carousel list={screenshots}/> : null}
          <MobileSidebar
            demo_url={demo_url}
            tech={techList}
            created_at={created_at}
            repo={repo}
            contributors={contributors}/>
          <div className={classes.description}>{description}</div>
        </div>
        <Sidebar 
          demo_url={demo_url}
          tech={techList}
          created_at={created_at}
          repo={repo}
          contributors={contributors}/>
      </div>
    </section>
  )
}