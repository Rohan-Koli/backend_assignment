# ✅ backend_assignment  
# 📝 Task Manager RESTful API

A simple RESTful API built with **Node.js** and **Express.js** for managing tasks (to-do items) using **in-memory storage**. This API supports full **CRUD operations**, **validation**, **error handling**, and optional **pagination**, and **filtering**.

---

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, Delete tasks
- **User Authentication**: Signup, Login, Logout with validation
- **Validation**: Ensures required fields (e.g., `title`, `description`, `email`, `password`) are present
- **In-memory Storage**: No database required
- **Pagination**: Retrieve tasks in pages via `page` and `limit` query
- **Filtering**: Filter tasks using keywords in `title` or `description`
- **Error Handling**: Graceful error responses with proper HTTP status codes

---

## 📂 API Endpoints

### 🧾 Tasks

- `GET /tasks` - List all tasks (supports pagination, filtering)
- `GET /tasks/:id` - Get a task by ID
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### 🔐 Auth

- `POST /signup` - Register a new user
- `POST /login` - Login user
- `GET /logout` - Logout user

> ✅ All API request/response examples and payloads are documented in the `postman_collection.json` file included in this repo.

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rohan-Koli/backend_assignment.git
   cd backend_assignment

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the server:**
   ```bash
   npm start

1. **API is available at:**
   http://localhost:8000
   

