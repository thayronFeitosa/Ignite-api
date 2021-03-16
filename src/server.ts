import express, { Request, Response } from 'express';
import { createCourse } from './routes';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({"ok":"hello word"})
})

app.post('/', (request, response) => {
  const { name } = request.body
  response.json({"ok":"hello word"})
})

app.listen(3333, () => { console.log("servidor rodando na porta 3333") });

