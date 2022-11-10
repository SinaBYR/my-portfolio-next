import NextLink, { LinkProps } from "next/link";
import styles from './link.module.scss';

type Props = {
  mode?: 'primary' | 'secondary'
} & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({
  mode = 'primary',
  href,
  as,
  legacyBehavior,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...rest 
}) => {
  const classes = [styles.link, styles[mode]].join(' ');
  
  return (
    <NextLink 
      href={href}
      as={as}
      legacyBehavior={legacyBehavior}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}>
      <a className={classes} {...rest}>{children}</a>
    </NextLink>
  )
}