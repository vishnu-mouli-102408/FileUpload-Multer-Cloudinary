# File Upload Service

## Overview

The File Upload Service is a project that allows users to upload files and generates a cloud URL for easy access. It utilizes Multer for file uploads, Cloudinary as the static storage platform, Express for the backend, and MongoDB for storing file metadata.

## Features

- **File Upload**: Allows users to upload files through the API.
- **Cloud Storage with Cloudinary**: Utilizes Cloudinary as the static storage platform for storing uploaded files.
- **File Metadata Storage**: Stores file metadata, including cloud URL, in a MongoDB database.
- **Express Backend**: Implements the backend using the Express web application framework.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **Multer**: Middleware for handling file uploads.
- **Cloudinary**: Cloud platform for image and video management.
- **MongoDB**: NoSQL database for storing file metadata.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/FileUpload-Multer-Cloudinary.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        PORT=your_preferred_port
        CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
        CLOUDINARY_API_KEY=your_cloudinary_api_key
        CLOUDINARY_API_SECRET=your_cloudinary_api_secret
        MONGODB_URI=your_mongodb_connection_string
        ```

4. **Run the File Upload Service:**
    ```bash
    npm start
    ```

5. **Access the File Upload Service:**
    - The service will be running on the specified port (default is 3005).

6. **Explore the File Upload Service!**

## Configuration

Ensure to set the appropriate environment variables in your `.env` file for configuring the File Upload Service:

- `PORT`: Port on which the service will run.
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Cloudinary API secret.
- `MONGODB_URI`: MongoDB connection string.

## License

This project is licensed under the [MIT License](LICENSE).
