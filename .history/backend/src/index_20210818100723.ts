import * as express from 'express'
import * as bodyParser from 'body-parser'
import { router} from './rotas'
import cors from 'cors'

const app: express.Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.use(cors)

const porta =  3005
app.listen(porta , () => {
 console.log(`back end rodando na porta ${porta}`)
})
