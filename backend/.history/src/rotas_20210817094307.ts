import {Request, Response , Router}  from 'express'
import {controllerPerguntas} from './controller/controllerPerguntas'

const router: Router = Router();

router.get('/pergunta', (req: Request, res: Response) => {
    res.send(controllerPerguntas);
});
