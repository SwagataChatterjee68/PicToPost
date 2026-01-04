# PicToPost 📸➡️📝  
**Image directly becomes a post**

PicToPost is a full-stack web application where logged-in users upload an image, AI generates a caption based on that image, and the complete post (image + caption) is saved in a MongoDB database.

This project focuses on real-world backend workflows like authentication, cloud image storage, AI integration, and database-driven post creation.

---

## 🚀 Features

- User authentication (Register & Login)
- Secure image upload to cloud storage
- AI-generated captions from images
- Post creation for authenticated users
- MongoDB-based post storage
- Clean REST API architecture

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS / Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Cloud & AI
- Cloudinary (image upload)
- AI API (image-to-caption generation)

---

## 🔐 Authentication Flow

1. User registers or logs in
2. JWT token is generated
3. Protected routes are accessible only to authenticated users
4. User can create posts after login

---

## 🖼️ Post Creation Flow

1. User uploads an image
2. Image is stored in cloud storage
3. AI analyzes the image
4. Caption is generated automatically
5. Image URL and caption are saved as a post in MongoDB

---

## ▶️ Run Locally

### Clone the repository
```bash
git clone https://github.com/your-username/PicToPost.git
cd PicToPost
Install backend dependencies
bash
Copy code
cd backend
npm install
Start the backend server
bash
Copy code
npm start
Run frontend
Open frontend/index.html in your browser or use Live Server.

📌 Future Enhancements
Caption regeneration option

Post feed with pagination

Like and comment system

User profiles

Deployment (Render / Vercel / AWS)

Image moderation
