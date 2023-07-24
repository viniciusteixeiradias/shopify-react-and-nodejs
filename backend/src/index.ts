import express, { Application } from 'express';
import cors from 'cors'

import productsRoutes from './routes/products';
import shopRoutes from './routes/shop';
import collectionsRoutes from './routes/collections';

const app: Application = express();
app.use(cors());

app.use('/products', productsRoutes);
app.use('/', collectionsRoutes);
app.use('/', shopRoutes);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

app.listen(PORT, () => { console.log(`Servidor rodando na porta ${PORT}`) });