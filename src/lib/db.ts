import { Pool } from 'pg'

// PostgreSQL connection setup
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_efkx30VCtFJh@ep-proud-star-aec4upap-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    ssl: {
        rejectUnauthorized: false,
    }
})

export default pool 