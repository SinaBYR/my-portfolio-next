import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/db";
import { sessionOptions } from "../../lib/session";
import type { User } from "../../types/types";

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.session.userId;

  if(!userId) {
    res.status(401).send('Unauthorized access.');
  }

  const query = `
    select id, username, created_at
    from user
    where id = '${userId}';
  `;

  try {
    const [user]: User[] = await db.pool.query(query);

    res.json(user);
  } catch(err) {
    res.status(500).send(err);
  }
}