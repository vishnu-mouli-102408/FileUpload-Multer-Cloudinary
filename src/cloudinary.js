import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv"
import fs from "fs"
import multer from 'multer';

dotenv.config()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});


export const handleUpload = async (localFilePath) => {
    try {
        // console.log("LOCALFILEPATH",localFilePath);
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        // console.log("RESPONSE URL",response);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        // console.log("ERROR",error);
        return null;
    }
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        // console.log("Des",file);
        cb(null,"public")
    },
    filename: function(req,file,cb){
        // console.log("FileName",file);
        cb(null,file.originalname)
    }
})

// const storage = new multer.memoryStorage();

export const upload = multer({storage: storage})


