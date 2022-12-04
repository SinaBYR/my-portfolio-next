import classes from './project.module.scss';
import { Technology } from '../../../types/types';
import { MobileSidebar } from './sidebar/mobileSidebar/mobileSidebar';
import { Sidebar } from './sidebar/sidebar';

interface Props {
  title: string;
  description: string;
  demo_url: string;
  preview: string[];
  tech: Technology[];
  created_at: string;
  edited_at: string;
  repo: string|null;
  contributors: any[]
}

export function Project ({
  title,
  description,
  demo_url,
  tech,
  preview,
  created_at,
  repo,
  contributors
}: Props): JSX.Element {
  return (
    <section className={classes.project}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>{title}</h2>
          {/* gallery is going to be a carousel, showcasing screenshots of the project. */}
          <div className={classes.gallery}></div>
          <MobileSidebar
            demo_url={demo_url}
            tech={tech}
            created_at={created_at}
            repo={repo}
            contributors={contributors}/>
          <p className={classes.description}>
            {/* {description} */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?
          </p>
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