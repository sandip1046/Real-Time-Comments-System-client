 Real-Time Comments System

This project is a real-time comments application built with Next.js for the frontend and Node.js with TypeScript for the backend. It uses MySQL for data storage,
Material UI (MUI) for styling, and Socket.IO for real-time comment updates.

## Features

- User Authentication
- Real-time Comment Posting and Updates using Socket.IO
- Comments stored in MySQL
- Frontend styled with Material UI (MUI)

## Tech Stack

- **Frontend**: Next.js, Material UI (MUI), Axios
- **Backend**: Node.js, Express, TypeScript, Socket.IO
- **Database**: MySQL

## Getting Started with Frontend

To get a local copy up and running, follow these steps:

## Installation

  ### Frontend Setup
  
   1. Clone the repository:
  
   
    git clone https://github.com/sandip1046/Real-Time-Comments-System-client.git
    
  2. Install the required dependencies:
  
    
    npm install
   
  3. Start the development server:
  
    
    npm run dev
   
  By default, the frontend will run on http://localhost:3000.
  
  
##Assumptions

- The socket.io connection and axios get and post request must be configure with the proper backend url : http://localhost:8000/api/v1/
