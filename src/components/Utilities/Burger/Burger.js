import classes from './Burger.module.css';

const Burger = ({styles, open, click}) => {
    const classNames = [classes.Burger, open ? classes.Open : null].join(' ');

    return (
        <div className={classNames} styles={styles} onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export { Burger }