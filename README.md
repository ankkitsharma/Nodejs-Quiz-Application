# Node.js Quiz Application

This is a simple quiz application built with Node.js and Express.js that tests users' knowledge on Node.js concepts.

## Features

- Users can access the quiz questions via HTTP endpoints.
- Users can submit their answers to the quiz.
- Users receive feedback on their answers along with the correct answer for each question.
- The application includes at 10 questions related to Node.js concepts.

## Installation

1. Clone the repository:
  git clone [https://github.com/your-username/nodejs-quiz.git](https://github.com/ankkitsharma/Nodejs-Quiz-Application.git)
2. Navigate to the project directory:
  cd Nodejs-Quiz-Application
4. Install dependencies:
  npm install

## Usage

1. Start the server:
  npm start or nodemon index.js
2. Open a web browser and go to http://localhost:3000/ to access the quiz interface.
3. Answer the questions and submit the quiz.

## API Endpoints

- GET /questions: Retrieve the quiz questions.
- POST /submit: Submit answers to the quiz and receive feedback.

## Additional Notes

- The quiz questions are stored in the questions.json file. You can modify or add more questions there.
- Error handling for invalid requests or unexpected errors is implemented in the server code.
- This project uses a simple HTML interface for user interaction, without any front-end frameworks.
## Screenshots

![image](https://github.com/ankkitsharma/Nodejs-Quiz-Application/assets/78787267/ee9fdf2e-f9a2-4217-b186-8a6102f45097)
![image](https://github.com/ankkitsharma/Nodejs-Quiz-Application/assets/78787267/da8dfc45-48d2-497c-bc8c-fb48ba143a15)







