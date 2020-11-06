import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  original_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
});

export default mongoose.model("Video", Schema);
