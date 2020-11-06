import { Resolver, Query, Mutation, InputType, Field, Arg } from "type-graphql";
import Category from "./Category";

import CategoryService from "./CategoryServices";

@InputType()
class CategoryInput {
  @Field()
  description!: string;

  @Field()
  name!: string;
}

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    const categories = CategoryService.show();
    return categories;
  }

  @Query(() => Category)
  async categoryFindById(@Arg("id") id: string) {
    const category = await CategoryService.findById(id);
    return category;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
    const category = await CategoryService.create(categoryInput);

    return category;
  }
}

export default CategoryResolver;
