<<<<<<< HEAD
# Task Manager Application

## Project Overview
This Task Manager application is built with **Next.js** and **TypeScript** to manage tasks efficiently. The application interacts with a dummy API to perform CRUD operations on tasks. It features task creation, viewing, updating, and marking tasks as completed, with visual feedback for task status.

## Features

### 1. Display Tasks
- The "All Task" section fetches tasks from the dummy API using a `GET` request.
- Tasks are displayed with their details.

### 2. Update Tasks
- Clicking the "View" button on a task opens a detailed card.
- The task can be updated and marked as completed.
- Once marked as completed, a `PUT` request is sent to the dummy API.
- The card’s color dynamically changes based on the task’s status.

### 3. Add New Tasks
- Navigate to the "Add Task" section to create a new task.
- A `POST` request is sent to the dummy API to insert the new task.

### 4. Notifications
- Notifications are triggered using **React Toastify**, indicating success or failure based on API responses.

## Technologies Used
- **Framework**: Next.js with TypeScript
- **State Management**: React Context API
- **API Integration**: Axios for making API requests
- **UI Feedback**: React Toastify for notifications

## Installation and Setup

### Prerequisites
- Ensure **Node.js** and **npm** are installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/thegravious/TaskManagerV1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TaskManagerV1
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Interaction

- **GET**: Fetches all tasks to display in the "All Task" section.
- **PUT**: Updates task details and marks tasks as completed.
- **POST**: Adds new tasks through the "Add Task" section.

## Folder Structure
```
TaskManagerV1
├── components
│   ├── Button
│   ├── InputField
│   └── Header
├── context
│   └── TaskContext
├── pages
│   ├── index.tsx (All Task section)
│   ├── AddTask.tsx (Add Task section)
│   └── _app.tsx
├── public
├── styles
│   └── globals.css
├── package.json
├── tsconfig.json
└── README.md
```

## Additional Notes
- Make sure to configure any required environment variables (if applicable) before running the project.
- Notifications for task operations are displayed in the top-right corner.