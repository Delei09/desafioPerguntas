import {Request, Response , Router}  from 'express'
import {controllerPerguntas} from './controller/controllerPerguntas'

const router: Router = Router();

router.get('/perguntas', (req: Request, res: Response) => {
    res.send(controllerPerguntas);
});

export {router};