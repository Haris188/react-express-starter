
import passport from 'passport'
import PassportLocal from 'passport-local'
import { submitQuery } from '../pg';

const LocalStrategy = PassportLocal.Strategy

export default (app:any)=>{
    passport.use(new LocalStrategy(
        { usernameField: 'name' },
        async (name,password, done) => {
          // here is where you make a call to the database
          // to find the user based on their username or email address

        //   const query = await submitQuery(`ADD A QUERY HERE TO GET USER FROM DATABASE`)
        //     const user = query
        //   if(user.success) {
        //     console.log(user.data.rows[0]);
        //     return done(null, user.data.rows[0])
        //   }
        }
      ));

      passport.serializeUser((user:any, done) => {
        // After getting the user by local strategy, here you
        // gonna give the passport an id(coulumn form db) 
        // to serialize the user
        // like done in following example
        // change second argument of done() for serial id of your own

        // done(null, user.id);
      });
      
      passport.deserializeUser(async (id, done) => {
        // Here you have to deserialize the logged in user
        // on their logout. You have to get the user of provided
        // id (by serialize) from the database. like in this example

        // const user = await submitQuery(`SELECT * FROM users WHERE id = ${id}`)
        // done(null, user.data.rows[0]);
      });

      app.use(passport.initialize())
      app.use(passport.session())
}