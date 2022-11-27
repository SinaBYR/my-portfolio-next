import { GetServerSideProps } from "next";
import { Project } from "../../components/projects/project/project";
import { getProject } from "../../lib/projects";
import { FullProject, Technology } from "../../types/types";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { project, technologies } = await getProject(params.id as string)
  return {
    props: {
      project,
      technologies
    }
  }
}

export default function FullProjectPage({ project, technologies }: { project: FullProject; technologies: Technology[] }) {
  const {
    id,
    title,
    description,
    preview,
    code_link,
    demo_link,
    created_at,
    edited_at
  } = project;
  return (
    <Project
      key={id}
      title={title}
      description={description}
      preview={preview}
      code_link={code_link}
      demo_link={demo_link}
      tech={technologies}
      created_at={created_at}
      edited_at={edited_at}/>
  )
}