import classes from './footer.module.scss';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Developed by Sina Beyraghdar © 2021</p>
      <p className={classes.photographer}>Pian delle Betulle, Italy. Photo by <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alessio Soggetti</a> on <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a>
      </p>
    </footer>
  )
}