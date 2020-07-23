import express from 'express'
import middleware from './middleware'
import passport from 'passport'

export const makeApp = ()=>{
    const app = express();

    middleware.installParsers(app)
    middleware.installSession(app)
    middleware.installPassport(app)
    
    app.get('/',(req,res)=>{
        res.send('reached')
    })

    app.post('/login', (req,res, next)=>{
        passport.authenticate('local',(err,user)=>{
            req.login(user,(err)=>{
                // Put here what you want to do after the user
                // is logged in e.g sending user data back to 
                // the client :
                // res.send(req.user)

                //also handle  err as well if user login fails
                // if(err){console.log(err)}
            })
        })(req, res, next)
    })
    
    app.listen(5000)
    console.log("API started on port 5000")
}