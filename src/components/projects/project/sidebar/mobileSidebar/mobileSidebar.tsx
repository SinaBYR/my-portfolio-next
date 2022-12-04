import { Technology } from '../../../../../types/types';
import { Contributors } from '../contributors/contributors';
import { Links } from '../links/links';
import { Technologies } from '../technologies/technologies';
import classes from './mobileSidebar.module.scss';

interface Props {
  demo_url: string;
  tech: Technology[];
  created_at: string;
  repo: string;
  contributors: any[];
}

export function MobileSidebar({ demo_url, created_at, tech, repo, contributors }: Props) {
  return (
    <div className={classes.mobileSidebar}>
      <Links repo={repo} demo_url={demo_url}/>
      <div className={classes.createdAt}>
        <h4>Created at</h4>
        <div>{new Date(created_at).toLocaleString()}</div>
      </div>
      <Technologies list={tech}/>
      <Contributors list={contributors}/>
    </div>
  )
}