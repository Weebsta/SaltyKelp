// importing and destructuring Pool from pg;
const { Pool } = require("pg");
const dotenv = require('dotenv');

dotenv.config();
 
// using Pool to connect with our Postgres DB;
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
 
// exporting query function;
module.exports = {
    query: (text, params) => pool.query(text, params),

}