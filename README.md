
# REST API

This application is intended to conduct CRUD (Create, Read, Update, and Delete) operations on user-provided task data and information. Users can provide task information through Postman, which serves as a frontend.

## Features

- Create - Add new Task.
- Read - Retrieve all tasks or task by name.
- Update - Modify existing task information.
- Delete - Delete a task.

## Installation

Clone the repository

```bash
  git clone https://github.com/gopi-srinu/REST-API.git
```
Navigate to the project directory
```bash
  cd REST-API
```
Run the Application
```bash
  nodemon index.js
```

## Usage

This application allows users to add a task, view all task information or a specified task information, delete a task, and change a specific task information.

## Adding a task

- We can add a task by sending a POST request and providing the relevant body information.

## Reading a task

- We can acquire information about all tasks by using the GET request, or we can read information about a specific task by using the GET request with the name of the task as a parameter.

## Deleting a task

- Using the DELETE request, we can remove a task from the database.

## Editing a task 

- Using the PUT request, we can change a specific task's details by including new body information.

## Tech Stack

**Server:** Node.JS, Express.JS

**Database:** MongoDB 
