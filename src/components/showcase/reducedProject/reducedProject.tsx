import Image from 'next/image';
import classes from './reducedProject.module.scss';
import img from '../../../../public/img/alessio-soggetti-gdE-5Oui1Y0-unsplash.webp';
import { Link } from '../../utilities';

interface Props {
  id: string;
  title: string;
  description: string;
  preview: string;
  tech: string[];
}

export function ReducedProject({
  id,
  title,
  description,
  preview,
  tech
}: Props) {
  return (
    <div className={classes.wrapper} key={id}>
      <div className={classes.preview}>
        <Image src={preview} layout="fill"/>
        <div className={classes.title}>{title}</div>
      </div>
      <div className={classes.content}>
        <div className={classes.tech}>
          {tech.map(val => <span key={val}>{val}</span>)}
        </div>
        <p>{description}</p>
        <Link variant="secondary" href={"/projects/" + id}>Read more</Link>
      </div>
    </div>
  )
}