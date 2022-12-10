import { withIronSessionSsr } from "iron-session/next";
import type { InferGetServerSidePropsType } from "next";
import DashboardLayout from "../components/layout/dashboardLayout/dashboardLayout";
import { db } from "../db/db";
import { sessionOptions } from "../lib/session";
import type { User } from "../types/types";
import type { NextPageWithLayout } from "./_app";

export const getServerSideProps = withIronSessionSsr(
  async function({req}) {
    const userId = req.session.userId;
    if(!userId) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        },
        props: {
          user: {} as User
        }
      }
    }
  
    const query = `
      select id, username, created_at
      from user
      where id = '${userId}';
    `;
  
    const [user]: User[] = await db.pool.query(query);
  
    return {
      props: {
        user: JSON.parse(JSON.stringify(user))
      }
    }
  },
  sessionOptions
);

const DashboardPage: NextPageWithLayout = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  return (
    <h1 style={{color: 'white'}}>Website Analytics</h1>
  )
}

DashboardPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default DashboardPage;