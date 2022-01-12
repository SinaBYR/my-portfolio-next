import classes from './SecondaryButton.module.css';

const SecondaryButton = props => <button className={classes.SecondaryButton} {...props}>{props.children}</button>

export { SecondaryButton }