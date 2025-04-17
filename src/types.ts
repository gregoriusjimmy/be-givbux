import { Response, Request } from 'express'

export type TCustomReq<T = null> = Request<{}, {}, T>

export type TCommonRes<T = any> = Response<{
  data?: T
  status: number
  message?: string
}>
