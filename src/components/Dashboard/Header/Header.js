import { SecondaryLink } from '../../Utilities';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.Header}>
            <h2>Dashboard</h2>
            <SecondaryLink to="/dashboard/create">Create a new project</SecondaryLink>
        </header>
    )
}

export { Header }