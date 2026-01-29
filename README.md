# 🎥 Real-Time Video Conferencing  Web  

A **fully functional Zoom-like video calling application** built using **React.js, Node.js, Express.js, and Socket.io**. This app enables users to **create and join video calls, chat in real time, mute/unmute audio, turn video on/off, and share their screen** seamlessly.  

🚀 **Experience smooth and high-quality video conferencing right from your browser!**  

---

## 🚀 Live Demo  
🔗 **[VideoCall-Web Live](https://facetime-vf4f.onrender.com)**  

---

## 📜 Table of Contents  

- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Project Structure](#-project-structure)  
- [Installation Guide](#-installation-guide)    
- [Contributing](#-contributing)  
- [License](#-license)  

---

## ✅ Features  

✔ **Multi-User Video Calling** – Seamlessly connect with multiple participants.  
✔ **Live Chat** – Send and receive messages in real time.  
✔ **Mute/Unmute & Video On/Off** – Toggle audio and video during the call.  
✔ **Screen Sharing** – Share your screen with participants.  
✔ **Dynamic Meeting Rooms** – Generate unique links for different meetings.  
✔ **Responsive UI** – Fully optimized for desktop and mobile.  
✔ **WebSockets for Real-Time Communication** – Powered by **Socket.io** for seamless interaction.  

---

## 🛠 Tech Stack  

### **Frontend:**  
- ⚛️ **React.js** – Component-based UI development  
- 🌿 **Context API** – State management    
- 🛠 **React Router** – Client-side navigation  

### **Backend:**  
- 🟢 **Node.js** – Fast and scalable backend  
- ⚡ **Express.js** – Lightweight server framework  
- 🔄 **Socket.io** – Real-time bi-directional communication  
- 🌍 **WebRTC** – Peer-to-peer video streaming  

---

## 📂 Project Structure  
```
videocallingweb/
│── backend/
│   ├── src/
│   │   ├── controllers/   # Backend logic (handling calls, users)
│   │   ├── models/        # Data models (if using a database)
│   │   ├── routes/        # API endpoints
│   │   ├── app.js         # Main backend server file
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│
│── frontend/
│   ├── public/            # Static assets (logos, favicons)
│   ├── src/
│   │   ├── contexts/      # Context API for global state management
│   │   ├── pages/         # Different pages (e.g., Home, Call, Chat)
│   │   ├── styles/        # CSS & UI styling
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # Entry point for frontend
│   ├── package.json       # Frontend dependencies
│
│── .gitignore             # Files to ignore in version control
│── README.md              # Project documentation

```
---

## 📥 Installation Guide  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/VideoCall-Web.git
cd VideoCall-Web
```
---
### 2️⃣ Install Dependencies  
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 4️⃣ Start the Backend Server  
```bash
cd backend
node index.js
```

### 5️⃣ Start the Frontend & Dashboard  
```bash
# Start frontend
cd ../frontend
npm start

```

---

## 👨‍💻 Contributing  
Want to improve **VideoCall-Web**?  
1. **Fork** this repository  
2. **Clone** it to your local machine  
3. **Create a new branch** (`git checkout -b feature-branch`)  
4. **Commit your changes** (`git commit -m "Added new feature"`)  
5. **Push** the changes (`git push origin feature-branch`)  
6. Open a **Pull Request** 🚀  

---
