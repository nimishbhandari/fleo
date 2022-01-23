import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `Greetings From <a href="https://bit.ly/resume-nimish"> Nimish Bhandari </a> &hearts;`
  );
});

app.use("/api/category", categoryRoutes);

const PORT = process.env.PORT || 5000;
const MODE = process.env.MODE;
app.listen(PORT, () => {
  console.log(`Server Running on PORT:${PORT} in ${MODE} mode`);
});
