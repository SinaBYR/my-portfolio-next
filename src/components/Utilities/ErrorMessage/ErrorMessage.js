import classes from './ErrorMessage.module.css';

const ErrorMessage = props => <p className={classes.ErrorMessage} {...props}>{props.children}</p>

export { ErrorMessage }