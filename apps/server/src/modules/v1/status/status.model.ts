import { t } from 'elysia'

const statusModel = {
  response: {
    200: t.Object({
      health: t.String(),
    }),
  },
}

export { statusModel }
