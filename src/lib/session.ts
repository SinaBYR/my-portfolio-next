import type { IronSessionOptions } from "iron-session"

export const sessionOptions: IronSessionOptions = {
  cookieName: 'user-session',
  password: process.env.IRON_SESSION_PASS
}

declare module "iron-session" {
  interface IronSessionData {
    user: any
  }
}