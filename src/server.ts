import express, { Request, Response } from 'express';
import { createCourse } from './routes';

const app = express();

app.get('/', (req, res) => {
  res.json({"ok":"hello word"})
})

app.listen(3333, () => { console.log("servidor rodando na porta 3333") });

