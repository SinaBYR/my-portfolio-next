import classes from './project.module.scss';
import { Technology } from '../../../types/types';
import { MobileSidebar } from './sidebar/mobileSidebar/mobileSidebar';
import { Sidebar } from './sidebar/sidebar';

interface Props {
  title: string;
  description: string;
  code_link: string;
  demo_link: string;
  preview: string[];
  tech: Technology[];
  created_at: string;
  edited_at: string;
  gh_repository: string|null;
}

export function Project ({
  title,
  description,
  code_link,
  demo_link,
  tech,
  preview,
  created_at,
  gh_repository
}: Props): JSX.Element {
  return (
    <section className={classes.project}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>{title}</h2>
          {/* gallery is going to be a carousel, showcasing screenshots of the project. */}
          <div className={classes.gallery}></div>
          <MobileSidebar
            code_link={code_link}
            demo_link={demo_link}
            tech={tech}
            created_at={created_at}
            gh_repository={gh_repository}/>
          <p className={classes.description}>
            {/* {description} */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?
          </p>
        </div>
        <Sidebar 
          code_link={code_link}
          demo_link={demo_link}
          tech={tech}
          created_at={created_at}
          gh_repository={gh_repository}/>
      </div>
    </section>
  )
}