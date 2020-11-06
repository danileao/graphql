import { Resolver, Query, Mutation, InputType, Field, Arg } from "type-graphql";
import Video from "./Video";

import VideoService from "./VideoServices";

@InputType()
class VideoInput {
  @Field()
  original_name!: string;

  @Field()
  name!: string;

  @Field()
  poster_path!: string;

  @Field()
  popularity!: number;

  @Field()
  category!: string;
}

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = VideoService.show();
    return videos;
  }

  @Query(() => Video)
  async videoFindById(@Arg("id") id: string) {
    const video = await VideoService.findById(id);
    return video;
  }

  @Mutation(() => Video)
  async createVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await VideoService.create(videoInput);

    return video;
  }
}

export default VideoResolver;
