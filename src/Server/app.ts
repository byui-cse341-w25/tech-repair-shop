import express from "express"
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../swagger'
import dotenv from "dotenv"
import {db} from '../Config/db.config'
import routes from '../Routes/routes'

const app = express()

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    .use('/', routes)

db.then(()=> {
    app.listen(process.env.PORT, () => console.log("Server is listening on port " + process.env.PORT))
})