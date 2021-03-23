import { Router } from 'express';
import multer from 'multer';


import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';


const categoriesRoute = Router();

const upload = multer({
  dest: './tmp'
});

categoriesRoute.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoute.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response);
  response.send();
});

export { categoriesRoute };
