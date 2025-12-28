import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server); // WebSocket setup

// Set port
app.set("port", (process.env.PORT || 8000));

// ---------------------------------------------------Middlewares
// app.use(cors({
//     origin: "http://localhost:3000",  // your frontend (React dev server)
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true
// }));
// app.use(cors());
const allowedOrigins = [
  "http://localhost:3000",
  "https://zoom-pearl-delta.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Postman, curl
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// API Routes
app.use("/api/v1/users", userRoutes);

// Default route (optional)
// app.get("/", (req, res) => {
//     res.send("Backend is running 🚀");
// });
app.get("/home", (req, res) => {
    return res.json({ "hello": "world" });
});

// Start server + DB
const start = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined. Check your .env file.");
        }

        const connectionDb = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

        server.listen(app.get("port"), () => {
            console.log(`LISTENING ON PORT ${app.get("port")}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

start();


// import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";
// import mongoose from "mongoose";
// import connectToSocket from "./controllers/socketManager.js";
// import cors from "cors";
// import userRoutes from "./routes/users.routes.js";

// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server);

// app.set("port", (process.env.PORT || 8000))
// app.use(cors());
// app.use(express.json({limit: "40kb"}));
// app.use(express.urlencoded({limit: '40kb', extended: true}));

// app.use("/api/v1/users", userRoutes);


// const start = async () => {
//     app.set("mongo_user")
//     const connectionDB = await mongoose.connect("mongodb+srv://ranitadutta:Ranita2005@zoom.gsiwvbw.mongodb.net/")
    
//     console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`)
//     server.listen(app.get("port"),()=> {
//         console.log("Listening on port 8000")
//     });
// }
// start();