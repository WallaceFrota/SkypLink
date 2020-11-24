import {Router} from 'express';
const routes = Router();

// importando controllers
import LinksControllers from './controllers/LinksController'

// instanciando classes dos controllers
const linksController = new LinksControllers();

// ROTAS
// encurtamento do link
routes.post('/links', linksController.postLink);
// acesso ao link
routes.get('/links/:code', linksController.hitLink);
// estatisticas do link
routes.get('/links/:code/stats', linksController.getLink);

export default routes;