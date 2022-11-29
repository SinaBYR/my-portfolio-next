import { BiLinkExternal } from 'react-icons/bi';
import { Link } from '../../../../Utilities';
import classes from './links.module.scss';

interface Props {
  code_link: string;
  demo_link: string;
}

export function Links({ code_link, demo_link }: Props) {
  return (
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
  )
}