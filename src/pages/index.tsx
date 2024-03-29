import { Landing } from '../components/landing/landing';
import { Showcase } from '../components/showcase/showcase';
import { Contact } from '../components/contact/contact';
import { Skills } from '../components/skills/skills';
import { getReducedProjects } from '../lib/projects';
import Layout from '../components/layout/layout';
import type { ReducedProjectType } from '../types/types';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const projects = await getReducedProjects(2);

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

function HomePage(
  {
    projects
  }:{
    projects: ReducedProjectType[]
  }
) {
  return (
    <Layout>
      <Landing />
      <Skills />
      <Showcase projects={projects} />
      <Contact />
    </Layout>
  )
}

// HomePage.getLayout = function getLayout(page) {
//   return (
//     <Layout>{page}</Layout>
//   )
// }

export default HomePage;