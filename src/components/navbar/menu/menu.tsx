import classes from './menu.module.scss';
import { NavLinks } from '../NavLinks/NavLinks';

type Props = {
  open: boolean
}

export function Menu({ open }: Props) {
  const classNames = [
    classes.menu,
    open ? classes.open : null
  ].join(' ');
  return (
    <div className={classNames}>
      <ul className={classes.links}>
        <NavLinks mobile/>
      </ul>
    </div>
  )
}