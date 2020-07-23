
import session from 'express-session'
import ConnectPgSimple from 'connect-pg-simple'
import {pool} from '../pg'
import {uuid} from 'uuidv4'

import dotenv from 'dotenv'
import { findEnv } from '../findenv';

dotenv.config({ path: findEnv() });

const HOUR = 60*60*1000;

const PgStore = ConnectPgSimple(session)

const { SECRET } = process.env;
if (!SECRET) {
  throw new Error("Server misconfigured");
}

export default (app:any)=>{

    const store = new PgStore({
        pool,
        tableName: 'session'
    })

    const sessionMiddleware = session({
        genid: (req) => {
          console.log(req.sessionID);
          return uuid() // use UUIDs for session IDs
        },
        store,
        secret: SECRET,
        resave: false,
        saveUninitialized: true,
        cookie:{
          secure: false,
          httpOnly:false,
          maxAge: HOUR
        }
      })
    
    app.use(sessionMiddleware)
}
