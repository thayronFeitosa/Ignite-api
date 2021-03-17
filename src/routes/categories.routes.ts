import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../service/CreateCategoryService';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoute.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  
  return response.send();
});

categoriesRoute.get('/', (request, response) => {
  const { name, description } = request.body;

  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

export { categoriesRoute };
