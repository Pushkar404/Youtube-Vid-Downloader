# YouTube Video Downloader
A web application to download YouTube videos by providing a URL.

## Project Structure

**Frontend**: React with Tailwind CSS (built with Vite)
**Backend**: Node.js with Express and ytdl-core

## Setup Instructions

**Backend**

Ensure Node.js is installed.
Create a backend directory and initialize a Node.js project:
```
mkdir youtube-downloader-backend
cd youtube-downloader-backend
npm init -y
```


## Install dependencies:
```
npm install express ytdl-core cors
```

Save the server.js file in the backend directory.
Run the backend server:node server.js



## Frontend

Create a frontend directory:
```
mkdir youtube-downloader-frontend
cd youtube-downloader-frontend
```


Initialize a Node.js project and install dependencies:
```
npm init -y
npm install react react-dom
npm install --save-dev @vitejs/plugin-react autoprefixer postcss tailwindcss vite
```


## Create the following files in the frontend directory:
  index.html
  src/App.jsx
  src/main.jsx
  src/index.css
  tailwind.config.js
  postcss.config.js
  package.json (replace the default one)


Run the development server:
```
npm run dev
```


Build for production:npm run build


Preview the production build:npm run preview


Open http://localhost:5173 (or the port shown by Vite) in your browser.

Usage

Ensure the backend server is running (node server.js in the backend directory).
Start the frontend development server (npm run dev in the frontend directory).
Enter a valid YouTube video URL in the input field.
Click "Download Video" to initiate the download.
The video will download as an MP4 file with the title derived from the YouTube video.

Notes

The backend must be running on http://localhost:3000 for the frontend to communicate with it.
Downloading YouTube videos may violate YouTube's Terms of Service unless authorized by the content creator.
For production, deploy the backend (e.g., on Heroku) and the frontend (e.g., on Vercel or Netlify). Update the frontend's fetch URL to match the deployed backend.
The frontend uses Vite for fast development and Tailwind CSS for styling, processed via PostCSS.

Dependencies

Backend: express, ytdl-core, cors
Frontend: react, react-dom, @vitejs/plugin-react, tailwindcss, postcss, autoprefixer, vite
