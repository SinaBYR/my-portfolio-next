import { db } from "../db/db";
import { ReducedProjectType, Technology } from "../types/types";

export async function getReducedProjects() {
  try {
    const projects: ReducedProjectType[] = await db.pool.query(`
      select id, title, description, created_at
      from project
      limit 2;
    `);
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