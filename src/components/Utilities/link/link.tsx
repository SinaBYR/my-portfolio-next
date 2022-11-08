import NextLink, { LinkProps } from "next/link";
import styles from './link.module.css';

type Props = {
  external: boolean;
  model: 'primary' | 'secondary'
} & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;


export const Link: React.FC<Props> = ({ external, model, children, ...rest }) => {
  const classes = [styles.link, styles[model]]
  if(external) {
    return <a className={classes.join(' ')} {...rest}>{children}</a>
  }
  
  return <NextLink className={classes.join(' ')} {...rest}>{children}</NextLink>
}