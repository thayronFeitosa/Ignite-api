import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) {

  }
  async execute({ name, description }: IRequest): Promise<void> {
    const categotyAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categotyAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
