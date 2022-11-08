import React from 'react';
import styles from './button.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: 'primary'|'secondary'|'success'|'danger';
}

export const Button: React.FC<Props> = ({ mode = 'primary', children, ...rest }) => {
  const classes = [styles.button, styles[mode]];

  return (
    <button className={classes.join(' ')} {...rest}>{children}</button>
  )
}