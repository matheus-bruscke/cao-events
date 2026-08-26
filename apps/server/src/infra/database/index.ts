import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { drizzle } from 'drizzle-orm/node-postgres'

expand(config({ path: '.env' }))

if (typeof process.env.DATABASE_URL !== 'string') {
  throw new Error('Invalid Database URL')
}

const db = drizzle({
  connection: process.env.DATABASE_URL,
})

export { db }
