import { Technology } from '../../../../../types/types';
import { Contributors } from '../contributors/contributors';
import { Links } from '../links/links';
import { Technologies } from '../technologies/technologies';
import classes from './mobileSidebar.module.scss';

interface Props {
  code_link: string;
  demo_link: string;
  tech: Technology[];
  created_at: string;
  gh_repository: string;
}

export function MobileSidebar({ code_link, demo_link, created_at, tech, gh_repository }: Props) {
  return (
    <div className={classes.mobileSidebar}>
      <Links code_link={code_link} demo_link={demo_link}/>
      <div className={classes.createdAt}>
        <h4>Created at</h4>
        <div>{new Date(created_at).toLocaleString()}</div>
      </div>
      <Technologies list={tech}/>
      <Contributors repo={gh_repository}/>
    </div>
  )
}