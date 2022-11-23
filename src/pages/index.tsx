import { Landing } from '../components/landing/landing';
import { Showcase } from '../components/showcase/showcase';
import { Contact } from '../components/contact/contact';
import { Skills } from '../components/skills/skills';
import { db } from '../db/db';

// export async function getServerSideProps() {
//   try {
//     const rows = await db.pool.query('select * from books;');
//     // const rows = await conn.query('select 1 as val;');
//     console.log(rows);
//     return {
//       props: {
//         rows
//       }
//     }
//   } catch(err) {
//     console.log(err);
//   }
// }

export default function Home({ rows }: {rows: string}) {
  return (
    <>
      <Landing />
      <Skills />
      <Showcase />
      <Contact />
    </>
  )
}