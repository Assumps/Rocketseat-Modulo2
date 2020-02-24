import { Router } from 'express';

import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users', Usercontroller.update);

export default routes;
