import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
});

const File = mongoose.model("File", fileSchema);

export default File;
