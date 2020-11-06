import Category from "../../models/Category";

interface CategoryType {
  description: string;
  name: string;
}

class CategoryService {
  async show() {
    const categories = await Category.find();
    return categories;
  }

  async findById(id: string) {
    const category = await Category.findById(id);
    return category;
  }

  async create(data: CategoryType) {
    const category = await Category.create(data);
    return category;
  }
}

export default new CategoryService();
