import classes from './sidebar.module.scss';
import { Technology } from '../../../../types/types';
import { Links } from './links/links';
import { Technologies } from './technologies/technologies';

interface Props {
  code_link: string;
  demo_link: string;
  tech: Technology[];
  created_at: string;
  gh_repository: string;
}

export function Sidebar({ code_link, demo_link, tech, created_at }: Props) {
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
      {/* <div className={classes.contributors}>
        <h4>Contributors</h4>
        <ul className={classes.avatars}>
          {contributors.map((c, i) => {
            return (
              <li style={{zIndex: c.contributions, marginTop: i > 11 && '4px', display: i > 9 && !isContributorsExpanded && 'none'}}>
                <a key={c.login} href={c.html_url} target="_blank" rel="noopener noreferrer" title={c.login}>
                  <Image src={c.avatar_url} width="100%" height="100%" />
                </a>
              </li>
            )
          })}
          {
            contributors.length > 10 &&
            <li onClick={() => setIsContributorsExpanded(state => !state)} style={{display: isContributorsExpanded && 'none'}}>
              <MdMoreHoriz fontSize="20px"/>
            </li>
          }
        </ul>
      </div> */}
    </aside>
  )
}