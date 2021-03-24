import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesUserCase } from './ListCategoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';

const listCategoriesRepository = null;
const listCategoryUserCase = new ListCategoriesUserCase(listCategoriesRepository);
const listCategoryController = new ListCategoriesController(listCategoryUserCase );

export { listCategoryController };
