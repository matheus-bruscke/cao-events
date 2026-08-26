import type { InlineHandler, UnwrapRoute } from 'elysia'
import { statusModel } from './status.model.js'
import { db } from '@/infra/database/index.js'
import { sql } from 'drizzle-orm'

const statusController: InlineHandler<
  UnwrapRoute<typeof statusModel>
> = async ({ status }) => {
  const databaseName = process.env.PGDATABASE

  if (typeof databaseName !== 'string') {
    throw new Error('Invalid PGUSER')
  }

  const dbVersion = (await db.execute(sql`SHOW server_version;`)).rows[0]
    ?.server_version

  const dbMaxConnections = (await db.execute(sql`SHOW max_connections;`))
    .rows[0]?.max_connections as string

  const dbOpenedConnections = (
    await db.execute(sql`
      SELECT count(*)::int AS count
      FROM pg_stat_activity
      WHERE datname = ${databaseName};
    `)
  ).rows[0]?.count as number

  return status(200, {
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        version: String(dbVersion),
        max_connections: parseInt(dbMaxConnections),
        opened_connections: dbOpenedConnections,
      },
    },
  })
}

export { statusController }
