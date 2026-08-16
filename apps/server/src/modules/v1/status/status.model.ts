import { t } from 'elysia'

const statusModel = {
  response: {
    200: t.Object({
      updated_at: t.String(),
      dependencies: t.Object({
        database: t.Object({
          version: t.String(),
          max_connections: t.Number(),
          opened_connections: t.Number(),
        }),
      }),
    }),
  },
}

export { statusModel }
