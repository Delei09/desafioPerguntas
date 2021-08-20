import * as express from 'express'
import * as bodyParser from 'body-parser'
import { router} from './rotas'
const cors = require('cors')

const app: express.Application = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.use(cors({origin:false,credentials: true}))
const porta =  3005
app.listen(porta , () => {
 console.log(`back end rodando na porta ${porta}`)
})
