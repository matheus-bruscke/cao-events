import { WebServer } from '@/infra/web-server.js'
import { describe, expect, it } from 'bun:test'

const webServer = new WebServer()

describe('GET /api/v1/status', () => {
  it('Should retrieve current system status', async () => {
    const response = await fetch(`${webServer.getServer()}/api/v1/status`)

    expect(response.status).toBe(200)

    const body = await response.json()

    const parsedUpdatedAt = new Date(body.updated_at).toISOString()

    console.log('env', process.env.NODE_ENV)

    const expectedMaxConnections =
      process.env.NODE_ENV !== 'production' ? 100 : 901

    expect(body.updated_at).toEqual(parsedUpdatedAt)
    expect(body.dependencies.database.max_connections).toEqual(
      expectedMaxConnections
    )
    expect(body.dependencies.database.opened_connections).toEqual(1)
    expect(body.dependencies.database).toHaveProperty('version')
  })
})
