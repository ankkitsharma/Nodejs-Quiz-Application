import express from "express";
import "dotenv/config";
import questions from "./questions.json" assert { type: "json" };
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.post("/submit", (req, res) => {
  const userAnswers = req.body.answers;
  let score = 0;

  questions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) {
      score++;
    }
  });
  res.json({ score: score });
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
