import { ObjectType, Field } from "type-graphql";
import Category from "../category/Category";

@ObjectType()
class Video {
  @Field()
  original_name!: string;

  @Field()
  _id!: string;

  @Field()
  popularity!: number;

  @Field()
  name!: string;

  @Field()
  poster_path!: string;

  @Field()
  category!: Category;
}

export default Video;
