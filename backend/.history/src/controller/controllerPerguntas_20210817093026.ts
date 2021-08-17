import { perguntas } from './../dados/perguntas';
import {Request, Response , Router}  from 'express'

const router: Router = Router();

router.get('/pergunta', (req: Request, res: Response) => {
    res.send(perguntas);
});


export const controllerPergunta: Router = router;