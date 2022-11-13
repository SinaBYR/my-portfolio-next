import Image from 'next/image';
import Link from 'next/link';
import classes from './showcase.module.scss';
import githubSvg from '../../../public/img/github.svg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function Showcase() {
  return (
    <section className={classes.showcase} >
      <div className={classes.showcaseWrapper}>
        <h2>
          <span>Let's give</span>
          <br />
          <span>your business</span>
          <br />
          <span>wings to fly.</span>
        </h2>
        <p>
          <span>I’m a Software Engineer who builds reliable, performant</span>
          <br />
          <span>and secure web-based applications.</span>
        </p>
        <div className={classes.socials}>
          <a href="https://b2n.ir/e82982" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/sina-beyraghdar" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}