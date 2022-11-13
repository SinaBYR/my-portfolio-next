import classes from './menu.module.scss';
import { Links } from '../links/links';
import { Logo } from '../../Utilities';

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
      <div className={classes.container}>
        <div className={classes.logoWrapper}>
          <Logo />
        </div>
        <div className={classes.linksWrapper}>
          <Links />
        </div>
      </div>
    </div>
  )
}