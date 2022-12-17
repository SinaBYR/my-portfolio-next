import { s3 } from "../aws/aws";
import { db } from "../db/db";
import { FullProject, ReducedProjectType, Technology } from "../types/types";
import { fetchJson } from "./fetchJson";

// This util function is used to retrieve reduced projects for
// showcase section of index page.
// It is called in getServerSideProps of index page, and then
// projects, and technologies arrays are passed to Showcase component.

// limit: optional => it determines the number of rows (projects)
// that'll be returned.
export async function getReducedProjects(limit?: number) {
  let query = `
    select id, title, description, preview, created_at
    from project
    order by created_at desc;
  `;
  if(limit > 0) {
    query = `
      select id, title, description, preview, created_at
      from project
      order by created_at desc
      limit ${limit};
    `;
  }

  const projects: ReducedProjectType[] = await db.pool.query(query);
  if(!projects.length) {
    return {
      projects: [],
      technologies: []
    }
  }

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
}

// This util function retrieves a single project data.
// It's used in pages/projects/[id].tsx component to
// fetch individual project.
// id: required => used to fetch a single matching project data.
export async function getProject(id: string) {
  const project: FullProject[] = await db.pool.query(`
    select *
    from project
    where id = '${id}';
  `);

  const bucketParams = {
    Bucket: 'sinabyr',
    Prefix: 'screenshots/' + id
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
  
  const technologies: Technology[] = await db.pool.query(`
    select *
    from technology
    where p_id = '${project[0].id}';
  `);

  // const response = await fetch(`https://api.github.com/repos/sinabyr/${project[0].repo}/contributors`);
  // const data = await response.json();

  const contributors = await fetchJson(`https://api.github.com/repos/sinabyr/${project[0].repo}/contributors`);

  return {
    project: {
      ...JSON.parse(JSON.stringify(project[0])),
      contributors: contributors
    },
    technologies,
    screenshots
  }
}