import classes from './sidebar.module.scss';
import { Technology } from '../../../../types/types';
import { Links } from './links/links';
import { Technologies } from './technologies/technologies';
import { Contributors } from './contributors/contributors';

interface Props {
  demo_url: string;
  tech: Technology[];
  created_at: string;
  repo: string;
}

export function Sidebar({ demo_url, tech, created_at, repo }: Props) {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.topSection}>
        <Links repo={repo} demo_url={demo_url}/>
        <div className={classes.createdAt}>
          <h4>Created at</h4>
          <div>{new Date(created_at).toLocaleString()}</div>
        </div>
        <Technologies list={tech}/>
      </div>
      <Contributors repo={repo}/>
    </aside>
  )
}