import { Elysia } from 'elysia'
import { statusRouter } from './status.router.js'

const v1Routes = new Elysia({ prefix: 'v1' }).use(statusRouter)

export { v1Routes }
