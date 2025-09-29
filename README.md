
# 📝 Todo App with Authentication

A full-stack Todo application built with **React**, **Node.js (Express)**, and **MongoDB**, supporting **user registration**, **authentication**, and **task management**.
---
## 📁 Project Structure
```
todo-app/
├── client/               # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/               # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

### 🔹 Frontend (client/)

* **React**
* **React Router (v6+)**
* **React Icons**
* **CSS / CSS Modules**

### 🔹 Backend (server/)

* **Express**
* **Mongoose (MongoDB ODM)**
* **MongoDB (local via Compass)**
* **Bcrypt** – password hashing
* **JSON Web Token (JWT)** – authentication
* **dotenv** – environment variables
* **CORS** – cross-origin request support

---

## 📦 Dependencies

### Frontend (`client/package.json`)

```json
"dependencies": {
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "react-icons": "^4.x.x"
}
```

### Backend (`server/package.json`)

```json
"dependencies": {
  "express": "^5.x.x",
  "mongoose": "^7.x.x",
  "bcrypt": "^5.x.x",
  "dotenv": "^16.x.x",
  "jsonwebtoken": "^9.x.x",
  "cors": "^2.x.x"
}
```

---

## 🌱 Features

* User Registration (`/api/register`)
* User Login (planned: `/api/login`)
* Todo creation, editing, and deletion
* Mark todos as complete/incomplete
* Passwords hashed using Bcrypt
* MongoDB data storage via Mongoose
* React-based UI with routing
* LocalStorage for todos (transitioning to backend)

---

## 🛠️ Getting Started

### 1. Clone the project

```bash
git clone <repo-url>
cd todo-app
```

### 2. Install dependencies

```bash
# Install root-level (for concurrently, optional)
npm install

# Install frontend
cd client
npm install

# Install backend
cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/companion-app
JWT_SECRET=your_jwt_secret_here
```

Make sure `.env` is in your `.gitignore`.

### 4. Set up React proxy

In `client/package.json`, add:

```json
"proxy": "http://localhost:5000"
```

### 5. Run the project

#### Development mode:

```bash
# From root directory
npm run dev
```

> Requires `concurrently` to be installed as a dev dependency.

This will:

* Start the backend at `http://localhost:5000`
* Start the frontend at `http://localhost:3000`

---

## 📡 API Overview

| Route           | Method              | Description              |
| --------------- | ------------------- | ------------------------ |
| `/api/register` | POST                | Register a new user      |
| `/api/login`    | POST                | (Planned) Log in a user  |
| `/api/todo`     | GET/POST/PUT/DELETE | (Planned) CRUD for tasks |

---

## 🗄️ MongoDB Notes

* Local MongoDB instance used via Compass
* Connection string:

  ```
  mongodb://localhost:27017/companion-app
  ```
* Collections (e.g., `users`, `todos`) are managed via Mongoose models

---

## 🚧 TODO / Future Improvements

* [ ] Implement `/api/login` route
* [ ] Add JWT authentication & route protection
* [ ] Store todos in MongoDB instead of localStorage
* [ ] Protect todo routes per authenticated user
* [ ] Add logout and user session handling
* [ ] Improve responsive UI & UX
* [ ] Deploy frontend and backend

---

## 🧼 Git Ignore Tips

Make sure your `.gitignore` includes:

```
node_modules/
.env
/build
.DS_Store
```

---

## 💡 Development Notes

* React Router (`<Routes>` and `<Route>`) is used for navigation
* CSS Modules are used for scoped styling in some components
* Global CSS is used where needed
* The backend serves the React app (in production mode only)

---

## 📦 Optional Dev Setup: Concurrently

Install `concurrently` to run frontend + backend from root:

```bash
npm install concurrently --save-dev
```

Then add to your root-level `package.json`:

```json
"scripts": {
  "dev": "concurrently \"npm start --prefix server\" \"npm start --prefix client\""
}
```

---

## 🧠 How It Works

* On login/register, user info is stored in localStorage
* Todos are managed on the client for now, with planned migration to MongoDB
* Backend is modularized with:

  * Controllers (`controllers/`)
  * Routes (`routes/`)
  * Models (`models/`)
* CORS is enabled for development only

---

## 🚀 Deployment (Optional)

In production:

1. Build React app: `cd client && npm run build`
2. Serve it from Express backend:

   ```js
   app.use(express.static(path.join(__dirname, '../client/build')));
   ```

---
