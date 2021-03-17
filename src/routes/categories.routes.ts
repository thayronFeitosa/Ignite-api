import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';


const categoriesRoute = Router();

categoriesRoute.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoute };
