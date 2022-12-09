import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/db";
import bcrypt from 'bcrypt';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(handler, sessionOptions)

async function handler( req: NextApiRequest, res: NextApiResponse ) {
  const { body } = req;

  if(!body.username || !body.passphrase) {
    return res.status(400).send({
      message: 'Missing required credentials.'
    })
  }

  const query = `
    select id, username, passphrase, created_at
    from user
    where username = '${body.username}';
  `;

  try {
    const [user] = await db.pool.query(query);
    if(!user) {
      res.status(401).send({
        message: 'Username or password is incorrect.'
      })
    }

    const match = await bcrypt.compare(body.passphrase, user.passphrase);
    if(!match) {
      res.status(401).send({
        message: 'Username or password is incorrect.'
      })
    }
    delete user.passphrase;
    
    req.session.userId = user.id;
    await req.session.save();
    res.json(user);
  } catch(err) {
    console.log(err);
    res.status(500).send({err});
  }
}