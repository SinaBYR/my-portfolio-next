import { IconType } from 'react-icons';
import classes from './customError.module.scss';

interface Props {
  title?: string;
  message?: string;
  Icon?: IconType;
  iconStyles?: React.CSSProperties
}

export function CustomError({
  title,
  message,
  Icon,
  iconStyles
}: Props) {
  return (
    <div className={classes.customError}>
      {Icon ? <h3>{<Icon style={iconStyles}/>}</h3> : null}
      {title ? <h3>{title}</h3> : null}
      {message ? <p>{message}</p> : null}
    </div>
  )
}