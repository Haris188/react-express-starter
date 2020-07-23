
import bodyParser from 'body-parser'

export default (app:any)=>{
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}