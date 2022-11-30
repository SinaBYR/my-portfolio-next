import { Technology } from '../../../../../types/types';
import classes from './technologies.module.scss';

interface Props {
  list: Technology[]
}

export function Technologies({ list }: Props) {
  return (
    <div className={classes.technologies}>
      <h4>Technologies</h4>
      <div className={classes.techList}>
        {list.map(t => <span key={t.id}>{t.name}</span>)}
      </div>
    </div>
  )
}