import express from 'express';
import cors from 'cors';

const app = express();

// importando rotas
import routes from './routes';

app.use(cors());
app.use(express.json());

// utilizando rotas
app.use(routes)

app.listen(3333);