import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link, Logo } from '../utilities';
import classes from './footer.module.scss';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div>
          <div className={classes.logoWrapper}>
            <Logo fontSize="16px"/>
          </div>
          <p>Developed by Sina Beyraghdar © {new Date().getFullYear()}</p>
        </div>
        <div>
          <div className={classes.linksWrapper}>
            <Link variant="simple" href="/projects">Projects</Link>
            <Link variant="simple" href="/projects">About me</Link>
            <Link variant="simple" href="/projects">Panel</Link>
          </div>
          <div className={classes.socials}>
            <a href="https://www.github.com/SinaBYR" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/sina-beyraghdar" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
            <a href="https://www.twitter.com/sinabyr" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}