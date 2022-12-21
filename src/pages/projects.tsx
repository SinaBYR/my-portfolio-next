import type { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "./_app";
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

const ProjectsPage: NextPageWithLayout = ({
  projects
}: {
  projects: ReducedProjectType[]
}) => {
  return (
    <Projects projects={projects} />
  )
}

ProjectsPage.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default ProjectsPage;