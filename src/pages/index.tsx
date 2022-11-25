import { Landing } from '../components/landing/landing';
import { Showcase } from '../components/showcase/showcase';
import { Contact } from '../components/contact/contact';
import { Skills } from '../components/skills/skills';
import { db } from '../db/db';
import { ReducedProjectType, Technology } from '../types/types';

export async function getServerSideProps() {
  try {
    const projects: ReducedProjectType[] = await db.pool.query(`
      select id, title, description, created_at
      from project
      limit 2;
    `);
    const p_ids = projects.map(p => `'${p.id}'`).join(',');
    const technologies: Technology[] = await db.pool.query(`
      select *
      from technology
      where p_id in (${p_ids});
    `);

    console.log(technologies);
    return {
      props: {
        projects: JSON.parse(JSON.stringify(projects)),
        technologies: technologies
      }
    }
  } catch(err) {
    console.error(err);
  }
}

export default function Home(
  {
    projects,
    technologies
  }:{
    projects: ReducedProjectType[],
    technologies: Technology[]
  }
) {
  return (
    <>
      <Landing />
      <Skills />
      <Showcase projects={projects} technologies={technologies}/>
      <Contact />
    </>
  )
}