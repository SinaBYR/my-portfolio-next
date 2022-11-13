import classes from './links.module.scss';
import Link from 'next/link';

export function Links() {
  return (
    <>
      <li className={classes.link}>
        <Link href="/">Skills</Link>
      </li>
      <li className={classes.link}>
        <Link href="/">Showcase</Link>
      </li>
      <li className={classes.link}>
        <Link href="/">Contact</Link>
      </li>
    </>
  )
}