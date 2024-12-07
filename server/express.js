import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import bookRoutes from './routes/book.routes.js'
import path from 'path'

const app = express()
const CURRENT_WORKING_DIR = process.cwd()

const corsOptions = {
    origin: "https://animated-lamington-627514.netlify.app",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));


console.log("process.env.REACT_BASE_URL >> "  + process.env.REACT_BASE_URL)
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Request-Method', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')
// })
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', bookRoutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
// app.use(cors())
app.use((err, req, res, next) => {
 if (err.name === 'UnauthorizedError') {
 res.status(401).json({"error" : err.name + ": " + err.message}) 
 const origin = req.headers.origin || 'Origin not available';
 console.log("origin >> " + origin);
 }else if (err) {
 res.status(400).json({"error" : err.name + ": " + err.message}) 
 console.log(err)
 const origin = req.headers.origin || 'Origin not available';
 console.log("origin 2>> " + origin);
 } 
 })



 export default app
