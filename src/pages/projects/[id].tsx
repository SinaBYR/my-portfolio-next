import type { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "../_app";
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

const FullProjectPage: NextPageWithLayout = ({
  project
}: {
  project: FullProjectType
}) => {
  return <Project project={project}/>
}

FullProjectPage.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default FullProjectPage;