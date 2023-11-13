import express from "express"
import bodyParser from "body-parser"
import {handleUpload,upload} from "./cloudinary.js"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const singleUpload = upload.single("image")

app.post("/upload",singleUpload,async (req,res)=>{
    const uploadedFile = req.file;
    // console.log(req.file);
    // const b64 = Buffer.from(req.file.buffer).toString("base64");
    // let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(req.file.path);
    console.log("CLURES",cldRes);
    if (!uploadedFile) {
        return res.status(400).json({
            message:"No file uploaded"
        })
      }
      res.status(200).json({
        message:'File uploaded successfully.'
      });  
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})
