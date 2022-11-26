import { Projects } from "../components/projects/projects";
import { getReducedProjects } from "../lib/projects";

export async function getServerSideProps() {
  const { projects, technologies } = await getReducedProjects();

  return {
    props: {
      projects,
      technologies
    }
  }
}

export default function Work({ projects, technologies }: any) {
  return (
    <Projects projects={projects} technologies={technologies} />
  )
}