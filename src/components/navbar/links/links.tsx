import classes from './links.module.scss';
import Link from 'next/link';

type Props = {
  mobile?: boolean;
}

export function Links({ mobile }: Props) {
  return (
    <ul className={classes.links}>
      <li>
        <Link href="/">Skills</Link>
      </li>
      <li>
        <Link href="/">Showcase</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </ul>
  )
}