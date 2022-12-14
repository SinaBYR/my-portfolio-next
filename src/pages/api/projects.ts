import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/db";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(handler, sessionOptions)

interface ProjectType {
  id: string;
  title: string;
  created_at: string;
  last_edited_at: string;
}

async function handler( req: NextApiRequest, res: NextApiResponse ) {
  if(!req.session.userId) {
    return res.status(401).send('Unauthorized access.');
  }

  const query = `
    select id, title, created_at, last_edited_at
    from project
    order by created_at desc;
  `;

  try {
    const projects: ProjectType[] = await db.query(query);
    res.json(projects);
  } catch(err) {
    res.status(500).send(err);
  }
}