import express from "express";
import pool from "../db.js";

const router = express.Router();

// Create table if it doesn't exist
await pool.query(`
  CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    movie_id INT UNIQUE,
    title TEXT NOT NULL,
    search_term TEXT NOT NULL,
    search_count INT DEFAULT 1,
    poster_url TEXT
  );
`);

// Increment search count
router.post("/search", async (req, res) => {
  const { title, movie_id, poster_url, search_term } = req.body;
  if (!title || !movie_id) {
    return res.status(400).json({ error: "Missing movie data" });
  }

  try {
    const result = await pool.query(
      `
      INSERT INTO movies (movie_id, title, poster_url, search_term, search_count)
      VALUES ($1, $2, $3, $4, 1)
      ON CONFLICT (movie_id)
      DO UPDATE SET search_count = movies.search_count + 1
      RETURNING *;
      `,
      [movie_id, title, poster_url, search_term]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating movie:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get top 5 trending
router.get("/trending", async (_req, res) => {
  try {
    const result = await pool.query(`
      SELECT title, poster_url, search_count FROM movies
      ORDER BY search_count DESC
      LIMIT 5;
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
