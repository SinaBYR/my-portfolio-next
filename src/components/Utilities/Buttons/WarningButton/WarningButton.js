import classes from './WarningButton.module.css';

const WarningButton = props => <button className={classes.WarningButton} {...props}>{props.children}</button>

export { WarningButton }