import type { GetServerSideProps } from "next";
import { getReducedProjects } from "../lib/projects";
import { Projects } from "../components/projects/projects";
import Layout from "../components/layout/layout";
import type { ReducedProjectType } from "../types/types";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const projects = await getReducedProjects();

    return {
      props: {
        projects
      }
    }
  } catch(err) {
    console.log(err);
    return {
      props: {
        projects: []
      }
    }
  }
}

function ProjectsPage({
  projects
}: {
  projects: ReducedProjectType[]
}) {
  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  )
}

export default ProjectsPage;