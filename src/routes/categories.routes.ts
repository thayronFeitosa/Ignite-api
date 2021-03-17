import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../service/CreateCategoryService';
import {PostgresCategoriesRepository} from '../repositories/PostgresCategoriesRepository'
const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository()
const postgresCategoriesRepository = new PostgresCategoriesRepository();

categoriesRoute.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(postgresCategoriesRepository);
  createCategoryService.execute({ name, description });
  
  return response.send();
});

categoriesRoute.get('/', (request, response) => {
  const { name, description } = request.body;

  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

export { categoriesRoute };
