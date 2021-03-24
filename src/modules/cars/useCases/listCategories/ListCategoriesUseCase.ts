import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoriesUserCase {
  constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) {

  }
  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUserCase }