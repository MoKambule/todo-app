
---

# 📝 Todo App with Authentication

A full-stack Todo application built with:

* 🖼 **React** (frontend)
* 🔌 **Node.js + Express** (backend)
* 💾 **MongoDB** with Mongoose
* 🔐 User authentication using **JWT** and **bcrypt**

---

## 📁 Project Structure

```
todo-app/
├── client/               # React frontend
│   ├── public/
│   ├── src/
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

### 🖥️ Frontend

* React (`react`, `react-dom`)
* React Router DOM (v6)
* React Icons
* CSS Modules & global CSS

### ⚙️ Backend

* Express
* MongoDB (with Mongoose)
* bcrypt (for hashing passwords)
* JSON Web Tokens (for auth)
* dotenv
* cors

---

## 📦 Dependencies

### `client/package.json`

```json
"dependencies": {
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "react-icons": "^4.x.x"
}
```

### `server/package.json`

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

## 🚀 How to Run the Project

### ✅ 1. Clone the repository

```bash
git clone <your-repo-url>
cd todo-app
```

---

### ✅ 2. Install dependencies

#### Root-level (optional for running both servers together)

```bash
npm install
```

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

### ✅ 3. Set up environment variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/companion-app
JWT_SECRET=your_jwt_secret_here
```

Make sure `.env` is added to `.gitignore`!

---

### ✅ 4. Add proxy for development

In `client/package.json`, add this:

```json
"proxy": "http://localhost:5000"
```

This lets React proxy API requests to your backend without CORS issues.

---

### ✅ 5. Run the app in development mode

#### Option 1: Run frontend and backend separately (2 terminals)

**Terminal 1** – Start the backend:

```bash
cd server
npm start
```

**Terminal 2** – Start the frontend:

```bash
cd client
npm start
```

---

#### Option 2: Run both using `concurrently` (from root)

Install `concurrently` as a dev dependency:

```bash
npm install concurrently --save-dev
```

In root `package.json`, add:

```json
"scripts": {
  "dev": "concurrently \"npm start --prefix server\" \"npm start --prefix client\""
}
```

Then just run:

```bash
npm run dev
```

---

### ✅ 6. Production build

To build and serve the React app from Express:

```bash
cd client
npm run build
```

In `server.js`, ensure you serve static files in production:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}
```

Start server in production mode (e.g., using `NODE_ENV=production`):

```bash
NODE_ENV=production node server.js
```

---

## 📡 API Overview

| Route           | Method | Description                   |
| --------------- | ------ | ----------------------------- |
| `/api/register` | POST   | Register a new user           |
| `/api/login`    | POST   | Login user (with JWT)         |
| `/api/todo`     | GET    | Get all todos (protected)     |
| `/api/todo`     | POST   | Create a new todo (protected) |
| `/api/todo/:id` | PUT    | Update a todo (protected)     |
| `/api/todo/:id` | DELETE | Delete a todo (protected)     |

> 🛡️ JWT token must be included in `Authorization` header as `Bearer <token>`.

---

## 🔐 Authentication

* User passwords are hashed using `bcrypt`
* JWT is issued upon login and stored client-side (localStorage or cookies)
* Protected routes require a valid token

---

## 🧪 MongoDB Info

* Default connection:

  ```
  mongodb://localhost:27017/companion-app
  ```

* Managed with Mongoose models in `/models`

* Access DB visually via MongoDB Compass

---

## ✅ Features

* 🔐 User registration & login
* 🗂️ CRUD for todos (create, update, delete)
* 📦 MongoDB for storage
* 🔏 JWT-based protected routes
* 🎨 React UI with routing
* 💾 LocalStorage fallback for offline todos (optional)
* 🔄 Concurrent frontend/backend dev
* 📁 Clean file structure and modular code

---

## 🚧 TODOs / Next Steps

* [ ] Fully migrate todos from localStorage to backend
* [ ] Add Logout functionality
* [ ] Add user-specific todo filtering
* [ ] Add user profile page
* [ ] Improve error handling and loading states
* [ ] Deploy to Render / Vercel / Railway

---

## 🧼 .gitignore Suggestions

```bash
# Node dependencies
node_modules/

# Environment variables
.env

# React build
/build

# OS junk files
.DS_Store
```

---

## 💡 Pro Tips

* ✅ Only use one `<BrowserRouter>` in your app (usually in `index.js`)
* 🛑 Avoid hardcoding backend URLs in React — use `proxy` in dev and relative paths
* 🔁 Restart servers when editing `.env` or server config
* 🔐 Never commit `.env` or JWT secrets to Git

---
