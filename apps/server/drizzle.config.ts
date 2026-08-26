import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { defineConfig } from 'drizzle-kit'

expand(config({ path: '.env' }))

if (typeof process.env.DATABASE_URL !== 'string') {
  throw new Error('DATABASE_URL is not set')
}

export default defineConfig({
  out: './src/infra/database/migrations',
  schema: './src/infra/database/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
})
