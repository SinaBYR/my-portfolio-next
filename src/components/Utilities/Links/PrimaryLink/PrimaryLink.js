import classes from './PrimaryLink.module.css';

const PrimaryLink = props => <a className={classes.PrimaryLink} {...props}>{props.children}</a>

export { PrimaryLink }