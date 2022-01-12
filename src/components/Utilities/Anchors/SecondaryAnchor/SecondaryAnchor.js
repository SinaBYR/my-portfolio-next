import classes from './SecondaryAnchor.module.css';

const SecondaryAnchor = props => <a className={classes.SecondaryAnchor} {...props}>{props.children}</a>

export { SecondaryAnchor }