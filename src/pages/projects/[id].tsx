import type { GetServerSideProps } from "next";
import type { FullProjectType } from "../../types/types";
import { Project } from "../../components/projects/project/project";
import { getProject } from "../../lib/projects";
import Layout from "../../components/layout/layout";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const project = await getProject(params.id as string)
    return {
      props: {
        project
      }
    }
  } catch(err) {
    return {
      props: {
        project: null
      }
    }
  }
}

function FullProjectPage({
  project
}: {
  project: FullProjectType
}) {
  return <Layout><Project project={project}/></Layout>
}

export default FullProjectPage;