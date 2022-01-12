import classes from './PrimaryAnchor.module.css';

const PrimaryAnchor = props => <a className={classes.PrimaryAnchor} {...props}>{props.children}</a>

export { PrimaryAnchor }