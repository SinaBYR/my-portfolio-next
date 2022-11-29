import classes from './contributors.module.scss';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { octokit } from "../../../../../gh/gh";
import { MdMoreHoriz } from 'react-icons/md';

interface Props {
  repo: string;
}

export function Contributors({ repo }: Props) {
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

  useEffect(() => {
    // return;
    if(!repo) return;

    async function fetchContributors() {
      try {
        const result = await octokit.request('GET /repos/{owner}/{repo}/contributors{?anon,per_page,page}', {
          owner: 'sinabyr',
          repo
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
    <div className={classes.contributors}>
      <h4>Contributors</h4>
      <ul className={classes.avatars}>
        {contributors.map((c, i) => {
          return (
            <li
              key={c.login}
              style={{
                display: (i > 9 && !isContributorsExpanded) ? 'none': 'inline-block',
                marginTop: i > 11 ? '4px' : 0,
                zIndex: 0 - i
              }}>
              <a key={c.login} href={c.html_url} target="_blank" rel="noopener noreferrer" title={c.login}>
                <Image src={c.avatar_url} width="100%" height="100%" />
              </a>
            </li>
          )
        })}
        {
          contributors.length > 10 &&
          <li
            onClick={() => setIsContributorsExpanded(state => !state)}
            style={{
              display: isContributorsExpanded ? 'none' : 'flex',
              zIndex: -51
            }}>
            <MdMoreHoriz fontSize="20px"/>
          </li>
        }
      </ul>
    </div>
  )
}