import classes from './Navbar.module.css';

const Navbar = props => {
    return (
        <div className={classes.Navbar}>
            <div>Logo</div>
            <ul className={classes.Links}>
                <li>
                    <a href="/">Github</a>
                </li>
                <li>
                    <a href="/">LinkedIn</a>
                </li>
                <li>
                    <a href="/">Twitter</a>
                </li>
            </ul>
            <div>Resume</div>
        </div>
    )
}

export { Navbar }