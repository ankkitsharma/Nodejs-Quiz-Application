// Get Questions from index.js and populate them in index.html
(async function getQuestions() {
  try {
    const response = await fetch("http://localhost:3000/questions");
    const questions = await response.json();
    // console.log(questions);
    const quizForm = document.getElementById("quizForm");
    questions.forEach((question, index) => {
      quizForm.innerHTML += `
      <p>${index + 1}. ${question.question}</p>
      <select name="question${index}">
        ${question.options
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("")}
      </select>
      <br>
      `;
    });
  } catch (error) {
    console.error(error);
  }
})();

// Submit Answers and get feedback and score
async function submitAnswers() {
  try {
    const quizForm = new FormData(document.getElementById("quizForm"));
    console.log(quizForm);
    const answers = Array.from(quizForm.values());
    console.log(answers);
    const response = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    const result = await response.json();
    const feedback = result.feedback;
    let feedbackMessage = "Quiz Results:\n\n";
    feedback.forEach((item, index) => {
      feedbackMessage += `Question ${index + 1}: ${item.result}\n`;
      feedbackMessage += `Correct Answer: ${item.correctAnswer}\n\n`;
    });
    feedbackMessage += `Your score is ${result.score}`;
    alert(feedbackMessage);
  } catch (error) {
    console.error(error);
  }
}
