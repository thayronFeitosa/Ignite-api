import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoute.post('/', (request, response) => {
  const { name, description } = request.body;
  const categotyAlreadyExists = categoriesRepository.findByName(name);

  if (categotyAlreadyExists) {
    return response.status(400).json({ error: "Category already exists" });
  }

  categoriesRepository.create({ name, description });
  return response.status(201).json({ data: { name, description } });
});

categoriesRoute.get('/', (request, response) => {
  const { name, description } = request.body;

  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

export { categoriesRoute };