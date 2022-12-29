import { db } from "../db/db";
import { s3 } from "../aws/aws";
import { fetchJson } from "./fetchJson";
import type { ReducedProjectType, FullProjectType, Technology } from "../types/types";

// This util function is used to retrieve reduced projects for
// showcase section of index page.
// It is called in getServerSideProps of index page, and then
// projects, and technologies arrays are passed to Showcase component.

// limit: optional => it determines the number of rows (projects)
// that'll be returned.
export async function getReducedProjects(limit?: number) {
  let query = `
    select id, title, description, thumbnail, created_at
    from project
    order by created_at desc;
  `;
  if(limit > 0) {
    query = `
      select id, title, description, thumbnail, created_at
      from project
      order by created_at desc
      limit ${limit};
    `;
  }

  const projects: ReducedProjectType[] = await db.pool.query(query);
  if(!projects.length) {
    return []
  }

  const p_ids = projects.map(p => `'${p.id}'`).join(',');
  const technologies: Technology[] = await db.pool.query(`
    select *
    from technology
    where p_id in (${p_ids})
    order by created_at desc
    limit 3;
  `);

  projects.forEach(p => {
    const techList = technologies.filter(t => t.p_id === p.id).map(t => t.name);
    p.techList = techList;
  })

  return JSON.parse(JSON.stringify(projects)) as ReducedProjectType[]
}

// This util function retrieves a single project data.
// It's used in pages/projects/[id].tsx component to
// fetch individual project.
// id: required => used to fetch a single matching project data.
export async function getProject(id: string) {
  const [project]: FullProjectType[] = await db.pool.query(`
    select id, title, description, demo_url, repo, created_at
    from project
    where id = '${id}';
  `);

  const technologies: Technology[] = await db.pool.query(`
    select *
    from technology
    where p_id = '${project.id}';
  `);

  const contributors: any[] = await fetchJson(`https://api.github.com/repos/sinabyr/${project.repo}/contributors`);

  const bucketParams = {
    Bucket: 'sinabyr',
    Prefix: 'screenshots/' + project.title
  };
  const { Contents } = await s3.listObjects(bucketParams).promise();
  // The root directory is also returned alongside actual objects.
  // Each s3 object contains a 'Size' property.
  // The object which contains root directory has a 0 Size value.
  // To remove that, I only pass objects whose Size property are non-zero value.
  const screenshots = Contents?.filter(obj => obj.Size).map(photo => {
    const href = 'https://sinabyr.storage.iran.liara.space/';
    const photoUrl = href + photo.Key;
    return photoUrl;
  });
  
  project.techList = technologies;
  project.contributors = contributors;
  project.screenshots = screenshots;

  return JSON.parse(JSON.stringify(project)) as FullProjectType;
}