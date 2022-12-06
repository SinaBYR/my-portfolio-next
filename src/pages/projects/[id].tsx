import { GetServerSideProps } from "next";
import { Project } from "../../components/projects/project/project";
import { getProject } from "../../lib/projects";
import { FullProject, Technology } from "../../types/types";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { project, technologies, screenshots } = await getProject(params.id as string)
  return {
    props: {
      project,
      technologies,
      screenshots
    }
  }
}

export default function FullProjectPage({ project, technologies, screenshots }: {
  project: FullProject;
  technologies: Technology[];
  screenshots: string[];
}) {
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