import type { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "../_app";
import type { FullProject, Technology } from "../../types/types";
import { Project } from "../../components/projects/project/project";
import { getProject } from "../../lib/projects";
import Layout from "../../components/layout/layout";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { project, technologies, screenshots } = await getProject(params.id as string)
    return {
      props: {
        project,
        technologies,
        screenshots
      }
    }
  } catch(err) {
    return {
      props: {
        project: null,
        technologies: null,
        screenshots: null
      }
    }
  }
  
}

const FullProjectPage: NextPageWithLayout = ({ project, technologies, screenshots }: {
  project: FullProject;
  technologies: Technology[];
  screenshots: string[];
}) => {
  const {
    id,
    title,
    description,
    repo,
    contributors,
    demo_url,
    preview,
    created_at,
    edited_at,
  } = project;

  return (
    <Project
      key={id}
      title={title}
      description={description}
      repo={repo}
      contributors={contributors}
      demo_url={demo_url}
      preview={preview}
      tech={technologies}
      created_at={created_at}
      edited_at={edited_at}
      screenshots={screenshots}/>
  )
}

FullProjectPage.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default FullProjectPage;