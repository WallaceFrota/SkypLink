import express from 'express';
const app = express();

// importando rotas
import routes from './routes';

app.use(express.json());

// utilizando rotas
app.use(routes)

app.listen(3333);