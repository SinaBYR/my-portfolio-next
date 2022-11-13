import classes from './project.module.scss';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from '../../Utilities';

export function Project ({
  title,
  code,
  demo,
  description,
  tech,
  preview
}) {

  return (
    <section className={classes.project}>
      <div>
        <h2>{title}</h2>
        <div className={classes.mobilePreview}>
          <img src={preview} alt="project-preview-screenshot"/>
        </div>
        <div className={classes.links}>
          <Link
            external
            href={demo}
            target="_blank"
            rel="noopener noreferrer">Demo <BiLinkExternal /></Link>
          <Link
            external
            href={code}
            target="_blank"
            rel="noopener noreferrer">Code <BiLinkExternal /></Link>
        </div>
        <p className={classes.description}>{description}</p>
        <div className={classes.technologies}>
          <h3>Technologies</h3>
          <ul>
            {tech.map(value => <li key={value}>{value}</li>)}
          </ul>
        </div>
      </div>
      <div className={classes.desktopPreview}>
        <img src={preview} alt="project-preview-screenshot"/>
      </div>
    </section>
  )
}