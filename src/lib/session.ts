import type { IronSessionOptions } from "iron-session"

export const sessionOptions: IronSessionOptions = {
  cookieName: 'user-session',
  password: process.env.IRON_SESSION_PASS,
  // ttl: 100,
  cookieOptions: {
    maxAge: 3600,
    secure: process.env.NODE_ENV === "production",
  }
}

declare module "iron-session" {
  interface IronSessionData {
    userId: string;
  }
}