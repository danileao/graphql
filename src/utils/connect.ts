import mongoose from "mongoose";

mongoose.connect("mongodb://root:root@localhost:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
