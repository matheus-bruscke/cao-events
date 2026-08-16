import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'

if (typeof process.env.DATABASE_URL !== 'string') {
  throw new Error('Invalid Database URL')
}

const db = drizzle({
  connection: process.env.DATABASE_URL,
})

export { db }
