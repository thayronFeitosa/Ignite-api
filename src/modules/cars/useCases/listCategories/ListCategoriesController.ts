import { Request, Response } from 'express';
import { ListCategoriesUserCase } from './ListCategoriesUseCase';
import { container } from 'tsyringe';

class ListCategoriesController {
 async  handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUserCase = container.resolve(ListCategoriesUserCase)
    const all = await listCategoryUserCase.execute()
    return response.json(all)
  }
}

export { ListCategoriesController }