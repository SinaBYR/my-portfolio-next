import classes from './Showcase.module.css';

const Showcase = props => {
    return (
        <section className={classes.Showcase}>
            <div className={classes.ShowcaseWrapper}>
                {/* <h2>Welcome</h2> */}
                <p>Hello, and welcome to my portfolio.</p>
                <p>My name is Sina. I'm a front-end web developer and I make web applications.</p>
                <p>You can check out my work in the next section.</p>
            </div>
        </section>
    )
}

export { Showcase }