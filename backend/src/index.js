import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend API is running! 🚀");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
