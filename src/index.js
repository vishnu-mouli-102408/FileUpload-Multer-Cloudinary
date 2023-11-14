import express from "express";
import bodyParser from "body-parser";
import { handleUpload, upload } from "./cloudinary.js";
import mongoose from "mongoose";
import File from "./file-model.js";
import fs from "fs";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const singleUpload = upload.single("image");

app.post("/upload", singleUpload, async (req, res) => {
  try {
    const uploadedFile = req.file;
    if (!uploadedFile) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }
    // console.log(req.file);
    // const b64 = Buffer.from(req.file.buffer).toString("base64");
    // let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(req.file.path);
    // console.log("CLURES", cldRes);
    const fileRes = await File.create({
      fileName: cldRes.original_filename,
      url: cldRes.secure_url,
    });
    fs.unlinkSync(req.file.path);
    res.status(200).json({
      data: fileRes,
      message: "File uploaded successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "File Upload Failed",
      err: error,
      data: {},
    });
  }
});

app.listen(process.env.PORT, async () => {
  console.log("Server started on port 3000");
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB Connected");
});
