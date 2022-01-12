import classes from './ConfirmButton.module.css';

const ConfirmButton = props => <button className={classes.ConfirmButton} {...props}>{props.children}</button>

export { ConfirmButton }