import classes from './sidebar.module.scss';
import { Technology } from '../../../../types/types';
import { Links } from './links/links';
import { Technologies } from './technologies/technologies';
import { Contributors } from './contributors/contributors';

interface Props {
  code_link: string;
  demo_link: string;
  tech: Technology[];
  created_at: string;
  gh_repository: string;
}

export function Sidebar({ code_link, demo_link, tech, created_at, gh_repository }: Props) {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.topSection}>
        <Links code_link={code_link} demo_link={demo_link}/>
        <div className={classes.createdAt}>
          <h4>Created at</h4>
          <div>{new Date(created_at).toLocaleString()}</div>
        </div>
        <Technologies list={tech}/>
      </div>
      <Contributors repo={gh_repository}/>
    </aside>
  )
}