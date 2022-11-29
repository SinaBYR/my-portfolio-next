import { BiLinkExternal } from 'react-icons/bi';
import { Link } from '../../../../Utilities';
import classes from './links.module.scss';

interface Props {
  demo_url: string;
  repo: string;
}

export function Links({ repo, demo_url }: Props) {
  return (
    <div className={classes.links}>
      <Link
        href={demo_url}
        target="_blank"
        rel="noopener noreferrer">Demo <BiLinkExternal /></Link>
      <Link
        href={"https://github.com/SinaBYR/" + repo}
        target="_blank"
        rel="noopener noreferrer">Code <BiLinkExternal /></Link>
    </div>
  )
}