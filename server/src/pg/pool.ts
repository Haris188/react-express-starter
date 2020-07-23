
import {Pool} from 'pg'
import dotenv from 'dotenv'
import { findEnv } from '../findenv';

dotenv.config({ path: findEnv() });

const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const connectionString = `postgressql://${user}:${password}@${host}:${port}/${database}`
console.log(connectionString)
const pool = new Pool({
    connectionString: connectionString,
    max:20,
    idleTimeoutMillis:0,
    connectionTimeoutMillis:0
})

export default pool