# Smart Campus Management System

A full-stack MERN web application for managing students, attendance, marks, and courses with admin authentication and dashboard analytics.

## Features
- Admin register/login using JWT
- Student CRUD with search
- Course management
- Attendance management
- Marks/result management
- Analytics dashboard with charts
- Responsive premium UI
- MongoDB Atlas database
- Vercel + Render deployment ready

## Tech Stack
Frontend: React, Vite, Tailwind CSS, Recharts, Axios  
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt

## Local Setup

### Backend
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
Add your MongoDB URL and JWT secret in `server/.env`.

### Frontend
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

## Deployment

### Backend on Render
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variables:
  - `MONGO_URI`
  - `JWT_SECRET`
  - `CLIENT_URL=https://your-vercel-app.vercel.app`

### Frontend on Vercel
- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable:
  - `VITE_API_URL=https://your-render-backend.onrender.com/api`

## Demo Login
Register first using the Register page, then login.
Suggested credentials:
- Email: `admin@test.com`
- Password: `123456`

## Project Name for Submission
Smart Campus: Full Stack Student & Academic Management System
