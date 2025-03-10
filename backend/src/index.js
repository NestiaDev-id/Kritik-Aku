import express from "express";
import dotenv from "dotenv";

import messageRoute from "./routes/messageRoute.js";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend API is running! 🚀");
});

app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
