import classes from './project.module.scss';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from '../../Utilities';
import { Technology } from '../../../types/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { octokit } from '../../../gh/gh';

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
function Project ({
  title,
  description,
  code_link,
  demo_link,
  tech,
  preview,
  created_at,
  gh_repository
}: Props): JSX.Element {
  const [contributors, setContributors] = useState<any[]>([])

  useEffect(() => {
    if(!gh_repository) return;

    async function fetchContributors() {
      try {
        const result = await octokit.request('GET /repos/{owner}/{repo}/contributors{?anon,per_page,page}', {
          owner: 'sinabyr',
          repo: gh_repository
        });

        setContributors([...result.data])
      } catch(err) {
        console.error(err);
      }
    }

    fetchContributors()
  }, [])

  return (
    <section className={classes.project}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>{title}</h2>
          {/* gallery is going to be a carousel, showcasing screenshots of the project. */}
          <div className={classes.gallery}></div>
          {/* mobileSidebar is exactly the same as sidebar. */}
          {/* I wanted to have this section after gallery in mobile view. So, I had to basically duplicate this code. */}
          <div className={classes.mobileSidebar}>
            <div className={classes.links}>
              <Link
                href={demo_link}
                target="_blank"
                rel="noopener noreferrer">Demo <BiLinkExternal /></Link>
              <Link
                href={code_link}
                target="_blank"
                rel="noopener noreferrer">Code <BiLinkExternal /></Link>
            </div>
            <div className={classes.createdAt}>
              <h4>Created at</h4>
              <div>{new Date(created_at).toLocaleString()}</div>
            </div>
            <div className={classes.technologies}>
              <h4>Technologies</h4>
              <div className={classes.techList}>
                {tech.map(t => <span key={t.id}>{t.name}</span>)}
              </div>
            </div>
            {/* will be fetched from github REST API */}
            {/* <div className={classes.contributors}></div> */}
          </div>
          <p className={classes.description}>
            {/* {description} */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellendus itaque quae odio nihil quia voluptates, est mollitia? Dicta dolorem fugiat impedit sed eum nulla praesentium cum placeat quas iste?
          </p>
        </div>
        <div className={classes.sidebar}>
          <div className={classes.links}>
            <Link
              href={demo_link}
              target="_blank"
              rel="noopener noreferrer">Demo <BiLinkExternal /></Link>
            <Link
              href={code_link}
              target="_blank"
              rel="noopener noreferrer">Code <BiLinkExternal /></Link>
          </div>
          <div className={classes.createdAt}>
            <h4>Created at</h4>
            <div>{new Date(created_at).toLocaleString()}</div>
          </div>
          <div className={classes.technologies}>
            <h4>Technologies</h4>
            <div className={classes.techList}>
              {tech.map(t => <span key={t.id}>{t.name}</span>)}
              {tech.map(t => <span key={t.id}>{t.name}</span>)}
            </div>
          </div>
          <div className={classes.contributors}>
            {contributors.map(c => <Image src={c.avatar_url} width="30px" height="30px" style={{borderRadius: '50px'}}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Project }