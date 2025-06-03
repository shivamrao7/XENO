# 🧠 Mini CRM Platform - Xeno SDE Internship Assignment 2025

A simplified CRM (Customer Relationship Management) platform built for the Xeno SDE Internship Assignment 2025. This project allows businesses to upload customer data, create personalized campaigns, and use AI for audience targeting.

---

## ✨ Features

- 📥 Customer & order data ingestion via REST APIs
- 🎯 Segment builder to create audience groups
- 📊 Campaign creation with delivery logging
- 🤖 AI audience preview (OpenAI integration)
- 🔐 Google OAuth (login/signup)
- 🖥️ Full-stack app with React (Frontend) + Node.js/Express + MongoDB

---

## 🧩 Tech Stack

| Layer       | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js, Bootstrap, Axios, React Router |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB (Mongoose ODM)               |
| AI         | OpenAI API                           |
| Auth       | Google OAuth 2.0                     |
| Deployment | Manual (Localhost)                   |

---

## 📁 Project Structure

📦 Mini-CRM-Platform
├── backend
│ ├── models
│ ├── routes
│ ├── controllers
│ ├── .env
│ └── server.js
├── frontend
│ ├── src
│ │ ├── components
│ │ └── App.js
│ └── public
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. **Navigate to backend folder:**
   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_key
PORT=5000
Start the server:

bash
Copy
Edit
node server.js
Server runs at http://localhost:5000

🎨 Frontend Setup
Navigate to frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
App runs at http://localhost:3000

🚀 API Endpoints
Customers
POST /api/customers — Upload customer data

Orders
POST /api/orders — Upload order data

Campaigns
POST /api/campaigns — Create campaign

GET /api/campaigns — View campaign history

AI
POST /api/ai/preview — Get audience preview using OpenAI

👨‍💻 Author
Shivam Rao
GitHub • LinkedIn


📜 License
This project is licensed for personal use and submission to Xeno only.
