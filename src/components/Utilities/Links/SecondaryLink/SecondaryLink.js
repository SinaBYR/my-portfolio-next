import classes from './SecondaryLink.module.css';

const SecondaryLink = props => <a className={classes.SecondaryLink} {...props}>{props.children}</a>

export { SecondaryLink }