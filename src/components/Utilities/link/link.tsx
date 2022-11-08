import NextLink, { LinkProps } from "next/link";
import styles from './link.module.css';

type Props = {
  external?: boolean;
  mode?: 'primary' | 'secondary'
} & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({ mode = 'primary', external = false, children, ...rest }) => {
  const classes = [styles.link, styles[mode]];
  if(external) {
    return <a className={classes.join(' ')} {...rest}>{children}</a>
  }
  
  return <NextLink className={classes.join(' ')} {...rest}>{children}</NextLink>
}