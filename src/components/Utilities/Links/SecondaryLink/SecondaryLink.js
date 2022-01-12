import classes from './SecondaryLink.module.css';
import { Link } from 'react-router-dom';

const SecondaryLink = props => <Link className={classes.SecondaryLink} {...props}>{props.children}</Link>

export { SecondaryLink }