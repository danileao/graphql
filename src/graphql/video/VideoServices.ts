import Video from "../../models/Video";

interface VideoType {
  original_name: string;
  name: string;
  poster_path: string;
  popularity: number;
  category: string;
}

class VideoService {
  async show() {
    const videos = await Video.find().populate("category");
    return videos;
  }

  async findById(id: string) {
    const video = await Video.findById(id).populate("category");
    return video;
  }

  async create(data: VideoType) {
    const video = await Video.create(data);
    return video;
  }
}

export default new VideoService();
