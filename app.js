import express from 'express';
import apiRouter from './routes/api.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(3000, () => console.log('Server running on port 3000'));