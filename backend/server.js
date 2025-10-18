import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movies.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/movies", movieRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
