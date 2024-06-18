REST API for Task Management

Key Points

Overview
Purpose: This project is a REST API designed for managing tasks, allowing users to perform CRUD (Create, Read, Update, Delete) operations on task data.
Technologies: Built using Node.js, Express, and MongoDB.

Features
CRUD Operations:
Create: Add new tasks.
Read: Retrieve all tasks or a specific task by name.
Update: Modify existing tasks.
Delete: Remove tasks by name.
Middleware: Utilizes Express middleware for logging requests and handling JSON payloads.
Error Handling: Includes basic error handling for database operations and invalid requests.

Endpoints

GET /tasks: Retrieve a list of all tasks.

GET /tasks/taskName : Retrieve a specific task by name.

POST /tasks/newTask : Create a new task with provided details.

DELETE /tasks/taskName : Delete a task by name.

PUT /tasks/taskName : Update details of a specific task.

Data Model
Task Schema: Defines the structure of a task document with fields for name, description, and status.

Database
MongoDB: Uses MongoDB for data storage, providing a scalable and flexible NoSQL database solution.

Installation & Setup

1. Clone Repository: Obtain the source code from the repository.
2. Install Dependencies: Use npm to install required packages.
3. Configure Environment: Set up a .env file with your MongoDB connection string.
4. Start Server: Run the server locally using Node.js.
