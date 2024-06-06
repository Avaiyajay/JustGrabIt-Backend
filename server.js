import express from "express";
import router from "./routes/index.js";
import connectDB from "./db/connection.js";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 8000;
const app = express();

// Establishing DB Connection
connectDB();

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
