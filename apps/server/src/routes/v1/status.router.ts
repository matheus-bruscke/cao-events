import { statusController } from '@/modules/v1/status/status.controller.js'
import { statusModel } from '@/modules/v1/status/status.model.js'
import { Elysia } from 'elysia'

const statusRouter = new Elysia({ prefix: 'status' }).get(
  '/',
  statusController,
  statusModel
)

export { statusRouter }
