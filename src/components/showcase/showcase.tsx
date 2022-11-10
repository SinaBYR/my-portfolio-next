import classes from './showcase.module.scss';

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
      </div>
    </section>
  )
}