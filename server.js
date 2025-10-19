import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getCatFact } from "./catFact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/me", async (req, res) => {
  try {
    const randomCatFact = await getCatFact();

    res.status(200).json({
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: randomCatFact
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});