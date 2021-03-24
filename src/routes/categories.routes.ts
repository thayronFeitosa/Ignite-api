import { Router } from 'express';
import multer from 'multer';


import { CreateCategoryController}  from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { listCategoryController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';


const categoriesRoute = Router();

const upload = multer({
  dest: './tmp'
});
const createCategoryController = new CreateCategoryController();

categoriesRoute.post('/', createCategoryController.handle)

categoriesRoute.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoute.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response);
  response.send();
});

export { categoriesRoute };
