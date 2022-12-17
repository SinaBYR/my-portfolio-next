import { Landing } from '../components/landing/landing';
import { Showcase } from '../components/showcase/showcase';
import { Contact } from '../components/contact/contact';
import { Skills } from '../components/skills/skills';
import { ReducedProjectType, Technology } from '../types/types';
import { getReducedProjects } from '../lib/projects';
import Layout from '../components/layout/layout';
import type { NextPageWithLayout } from './_app';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { projects, technologies } = await getReducedProjects(2);

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

const HomePage: NextPageWithLayout = (
  {
    projects,
    technologies
  }:{
    projects: ReducedProjectType[],
    technologies: Technology[]
  }
) => {
  return (
    <>
      <Landing />
      <Skills />
      <Showcase projects={projects} technologies={technologies}/>
      <Contact />
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default HomePage;