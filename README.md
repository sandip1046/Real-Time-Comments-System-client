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

## Getting Started

To get a local copy up and running, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/your-username/real-time-comments.git
cd real-time-comments
```
This project has two main folders:

- **frontend**: Contains the Next.js application.
- **backend**: Contains the Node.js API and real-time server logic.


## Installation

  ### Frontend Setup
  
  1. Navigate to the frontend directory:
  
     ```bash
     cd frontend
     ```
  2. Install the required dependencies:
  
    ```bash
    npm install
    ```
  3. Start the development server:
  
    ```bash
    npm run dev
    ```
  By default, the frontend will run on http://localhost:3000.
  
  
##Assumptions

- The socket.io connection and axios get and post request must be configure with the proper backend url : http://localhost:8000/api/v1/
