import { Elysia } from 'elysia'
import { v1Routes } from './routes/v1/index.js'

const app = new Elysia({ prefix: 'api' }).use(v1Routes).listen(3000)

console.log(`🦊 Elysia is running: ${app.server?.hostname}:${app.server?.port}`)
