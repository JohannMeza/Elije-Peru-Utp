import pkg from 'pg'
const { Pool } = pkg

const host = process.env.DB_HOST || 'localhost'
const port = process.env.DB_PORT || 5432
const user = process.env.DB_USER || 'postgres'
const password = process.env.DB_PASS || '1234'
const database = process.env.DB_NAME || 'elijeperu'

export const pool = new Pool(
  process.env.DATABASE_URL && !process.env.DB_HOST
    ? { connectionString: process.env.DATABASE_URL }
    : {
        host,
        port: parseInt(port, 10),
        user,
        password,
        database
      }
)
