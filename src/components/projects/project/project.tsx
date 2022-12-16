import classes from './project.module.scss';
import { Technology } from '../../../types/types';
import { MobileSidebar } from './sidebar/mobileSidebar/mobileSidebar';
import { Sidebar } from './sidebar/sidebar';
import { Carousel } from './carousel/carousel';

interface Props {
  title: string;
  description: string;
  demo_url: string;
  preview: string[];
  tech: Technology[];
  created_at: string;
  edited_at: string;
  repo: string|null;
  contributors: any[];
  screenshots: string[];
}

export function Project ({
  title,
  description,
  demo_url,
  tech,
  created_at,
  repo,
  contributors,
  screenshots
}: Props): JSX.Element {
  return (
    <section className={classes.project}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>{title}</h2>
          {screenshots.length ? <Carousel list={screenshots}/> : null}
          <MobileSidebar
            demo_url={demo_url}
            tech={tech}
            created_at={created_at}
            repo={repo}
            contributors={contributors}/>
          <div className={classes.description}>{description}</div>
        </div>
        <Sidebar 
          demo_url={demo_url}
          tech={tech}
          created_at={created_at}
          repo={repo}
          contributors={contributors}/>
      </div>
    </section>
  )
}