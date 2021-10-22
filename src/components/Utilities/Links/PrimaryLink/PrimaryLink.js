import classes from './PrimaryLink.module.css';
import { Link } from 'react-router-dom';

const PrimaryLink = props => <Link className={classes.PrimaryLink} {...props}>{props.children}</Link>

export { PrimaryLink }