import classes from './button.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'|'secondary'|'simple'|'simple-alt';
}

export const Button: React.FC<Props> = ({ variant = 'primary', children, ...rest }) => {
  const classNames = [classes.button, classes[variant]].join(' ');

  return (
    <button className={classNames} {...rest}>{children}</button>
  )
}