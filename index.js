import express from "express";
import "dotenv/config"; // Load environment variables from .env file
import questions from "./questions.json" assert { type: "json" }; // Import questions from JSON file
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json()); // Parse JSON request bodies

// Route to handle GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get Questions
app.get("/questions", (req, res) => {
  res.json(questions);
});

// Route to handle POST requests to the "/submit" URL, calculate score and return feedback
app.post("/submit", (req, res) => {
  const userAnswers = req.body.answers;
  let score = 0;
  const feedback = [];

  // Loop to check users answers
  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.answer;
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      score++;
      feedback.push({
        question: question.question,
        result: "correct",
        correctAnswer,
      });
    } else {
      feedback.push({
        question: question.question,
        result: "incorrect",
        correctAnswer,
      });
    }
  });
  res.json({ score: score, feedback: feedback }); // Return the score
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
