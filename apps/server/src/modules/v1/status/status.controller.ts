import type { InlineHandler, UnwrapRoute } from 'elysia'
import { statusModel } from './status.model.js'

const statusController: InlineHandler<UnwrapRoute<typeof statusModel>> = ({
  status,
}) => {
  return status(200, { health: 'ok' })
}

export { statusController }
