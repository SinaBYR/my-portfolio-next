import classes from './PrimaryButton.module.css';

const PrimaryButton = props => <button className={classes.PrimaryButton} {...props}>{props.children}</button>

export { PrimaryButton }