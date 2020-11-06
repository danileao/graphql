import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Category {
  @Field()
  name!: string;

  @Field()
  _id!: string;

  @Field()
  description!: string;
}

export default Category;
