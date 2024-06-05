import express from "express";
import path from "path";
import router from "./routes/index.js";
import connectDB from "./db/connection.js";

const port = process.env.PORT || 8000;
const app = express();

// Establishing DB Connection
connectDB();

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
