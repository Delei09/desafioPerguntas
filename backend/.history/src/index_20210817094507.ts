import * as express from 'express'
import * as bodyParser from 'body-parser'
import { router} from './rotas'

const app: express.Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

const porta =  3000
app.listen(porta , () => {
 console.log(`back end rodando na porta ${porta}`)
})
