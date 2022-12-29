import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/db";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(handler, sessionOptions);

interface UserTableRecord {
  id: string;
  username: string;
  created_at: string;
  last_sign_in: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.session.userId;

  if(!userId) {
    return res.json({
      id: '',
      username: '',
      created_at: '',
      last_sign_in: '',
      isLoggedIn: false
    });
  }

  const query = `
    select id, username, created_at
    from user
    where id = '${userId}';
  `;

  try {
    const conn = await db.pool.getConnection();
    const [user]: UserTableRecord[] = await conn.query(query);
    conn.release();
    
    res.json({
      ...user,
      isLoggedIn: true
    });
  } catch(err) {
    res.status(500).send(err);
  }
}