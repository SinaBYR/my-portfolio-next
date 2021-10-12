import classes from './Footer.module.css';

const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <p>Developed by Sina Beyraghdar © 2021</p>
            <p className={classes.Photographer}>Pian delle Betulle, Italy. Photo by <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alessio Soggetti</a> on <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a>
            </p>
        </footer>
    )
}

export { Footer }