import classes from './project.module.scss';
import { Technology } from '../../../types/types';
import { useEffect, useState } from 'react';
import { octokit } from '../../../gh/gh';
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
  const [contributors, setContributors] = useState<any[]>([
    {
      "login": "1",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 16
    },
    {
      "login": "2",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 15
    },
    {
      "login": "3",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 14
    },
    {
      "login": "4",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 13
    },
    {
      "login": "5",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 12
    },
    {
      "login": "6",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 11
    },
    {
      "login": "7",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 10
    },
    {
      "login": "8",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 9
    },
    {
      "login": "9",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 8
    },
    {
      "login": "10",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 7
    },
    {
      "login": "11",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 6
    },    {
      "login": "12",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 5
    },
    {
      "login": "13",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 4
    },
    {
      "login": "14",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 3
    },
    {
      "login": "15",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 2
    },
    {
      "login": "16",
      "avatar_url": "https://avatars.githubusercontent.com/u/59318782?v=4",
      "html_url": "https://github.com/SinaBYR",
      "contributions": 1
    },
  ]);
  const [isContributorsExpanded, setIsContributorsExpanded] = useState(false);
  const [expandNum, setExpandNum] = useState<10|undefined>(10);

  useEffect(() => {
    return;
    if(!gh_repository) return;

    async function fetchContributors() {
      try {
        const result = await octokit.request('GET /repos/{owner}/{repo}/contributors{?anon,per_page,page}', {
          owner: 'sinabyr',
          repo: gh_repository
        });

        console.log(result);

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

export { Project }