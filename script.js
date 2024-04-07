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
    alert(`Your score is ${result.score}`);
  } catch (error) {
    console.error(error);
  }
}
