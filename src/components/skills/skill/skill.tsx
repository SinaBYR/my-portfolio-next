import Image, { ImageProps } from "next/image";
import classes from './skill.module.scss'

type Props = {
  title: string;
} & ImageProps;

export function Skill({ src, alt, title, ...rest }: Props) {
  return (
    <div className={classes.skill}>
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        {...rest}/>
      <div className={classes.title}>{title}</div>
    </div>
  )
}