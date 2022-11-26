import { Landing } from '../components/landing/landing';
import { Showcase } from '../components/showcase/showcase';
import { Contact } from '../components/contact/contact';
import { Skills } from '../components/skills/skills';
import { ReducedProjectType, Technology } from '../types/types';
import { getReducedProjects } from '../lib/projects';

export async function getServerSideProps() {
  const { projects, technologies } = await getReducedProjects();

  return {
    props: {
      projects,
      technologies
    }
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