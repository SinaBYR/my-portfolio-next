import { db } from "../db/db";
import { ReducedProjectType, Technology } from "../types/types";

// This util function is used to retrieve reduced projects for
// showcase section of index page.
// It is called in getServerSideProps of index page, and then
// projects, and technologies arrays are passed to Showcase component.

// limit: optional => it determines the number of rows (projects)
// that'll be returned.
export async function getReducedProjects(limit?: number) {
  let query = `
    select id, title, description, created_at
    from project
    order by created_at desc;
  `;

  if(limit > 0) {
    query = `
      select id, title, description, created_at
      from project
      order by created_at desc
      limit ${limit};
    `
  }
  try {
    const projects: ReducedProjectType[] = await db.pool.query(query);
    const p_ids = projects.map(p => `'${p.id}'`).join(',');
    const technologies: Technology[] = await db.pool.query(`
      select *
      from technology
      where p_id in (${p_ids});
    `);
    
    return {
      projects: JSON.parse(JSON.stringify(projects)),
      technologies: technologies
    }
  } catch(err) {
    console.error(err);
  }
}