import {Request, Response} from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private creteCategoryUserCase: CreateCategoryUseCase) {

  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.creteCategoryUserCase.execute({ name, description });
    
    return response.send();
  }

}

export { CreateCategoryController };