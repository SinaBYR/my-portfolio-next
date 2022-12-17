import type { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "./_app";
import { getReducedProjects } from "../lib/projects";
import { Projects } from "../components/projects/projects";
import Layout from "../components/layout/layout";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { projects, technologies } = await getReducedProjects();

    return {
      props: {
        projects,
        technologies
      }
    }
  } catch(err) {
    console.log(err);
    return {
      props: {
        projects: [],
        technologies: []
      }
    }
  }
}

const ProjectsPage: NextPageWithLayout = ({ projects, technologies }: any) => {
  return (
    <Projects projects={projects} technologies={technologies} />
  )
}

ProjectsPage.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default ProjectsPage;