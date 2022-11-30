import classes from './link.module.scss';
import NextLink, { LinkProps } from "next/link";

type Props = {
  variant?: 'primary'|'secondary'|'simple';
  simple?: boolean;
} & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({
  variant = 'primary',
  simple = false,
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
  const classNames = [classes.link, classes[variant]].join(' ');
  
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
      <a className={classNames} {...rest}>{children}</a>
    </NextLink>
  )
}