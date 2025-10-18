# 🎬 Movie Search and Trending App

A full-stack web application built with **React (Vite)**, **Express.js**, and **PostgreSQL**.  
Users can search for movies using the [TMDB API](https://www.themoviedb.org/documentation/api), view details, and see the top trending movies based on search frequency.

---

## 🚀 Features

- 🔍 **Live Movie Search** powered by TMDB API  
- 🕒 **Debounced Search** for smooth performance (no spam requests)  
- 📈 **Trending Movies** based on most-searched titles  
- 🗃️ **PostgreSQL Database** to track searches  
- 💾 **Backend API** with Express and REST routes  
- 🎨 **Tailwind CSS** for clean, responsive UI  

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

Install:
- [Node.js](https://nodejs.org) (v18+)
- [PostgreSQL](https://www.postgresql.org/)
- TMDB API key (free on their website)

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:
```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/moviesdb
PORT=4000
```

Then create the database in PostgreSQL:
```sql
CREATE DATABASE moviesdb;
```

Run the backend:
```bash
npm start
```

✅ You should see:
```
✅ Connected to PostgreSQL
🚀 Server running on port 4000
```

---

### 3️⃣ Frontend Setup

```bash
cd my-first-react-app
npm install
```

Add your TMDB key in `.env`:
```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

Run the frontend:
```bash
npm run dev
```

Visit:
```
http://localhost:5173
```

---

## 🏆 Acknowledgments

This project’s UI design and React implementation were inspired by the  
[JavaScript Mastery (JSMastery)](https://www.youtube.com/@javascriptmastery) YouTube tutorial on building a Movie App.

I adapted the code and expanded it with a custom backend using Express.js and PostgreSQL for tracking trending searches.