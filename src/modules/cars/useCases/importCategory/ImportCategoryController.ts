import { Request, Response } from 'express';
import path from 'path';


import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {

  constructor(private importCategoryUseCase: ImportCategoryUseCase) {

  }

  handle(request: Request, response: Response) {
    this.importCategoryUseCase.execute(request.file)
    return response.send();
  }
}

export { ImportCategoryController };
