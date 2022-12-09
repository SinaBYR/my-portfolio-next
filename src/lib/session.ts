import type { IronSessionOptions } from "iron-session"

export const sessionOptions: IronSessionOptions = {
  cookieName: 'user-session',
  password: '1234567890123456789012345678901234567890'
}

declare module "iron-session" {
  interface IronSessionData {
    user: any
  }
}