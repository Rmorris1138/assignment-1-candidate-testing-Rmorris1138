const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

/*
questions = 0;
correctAnswers = 0;
candidateAnswers = 0;
candidateAnswer = [];

//question = "Who was the first American woman in space? ";
question = ["Who was the first American woman in space: ",
  "true or false: 5000 meters = 5 kilometers: ",
  "(5 + 3)/2 * 10 = ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2: ",
  "What is the minimum crew size for the International Space Station (ISS): "];

//correctAnswer = "Sally Ride"
correctAnswer = ["Sally Ride", true, 40, "Trajectory", 3];
//runProgram(); 
*/

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter the Candidates Name: ");
  return; // candidateName;
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let x = 0; x < questions.length; x++) {
    candidateAnswers[x] = (input.question(questions[x]));
  }
}

function gradeQuiz(candidateAns) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;



  for (let y = 0; y < candidateAnswers.length; y++) {

    if (candidateAnswers[y].toLowerCase() == correctAnswers[y].toLowerCase()) {
      console.log(`Question ${y+1}\) Correct`);
      grade ++;
    } else {
      console.log(`Question ${y+1}\) Incorrect`);
    };
  };
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello: ${candidateName}`);

  askQuestion();
  // console.clear;
  // console.log("Candidate Name: " + candidateName);
  // console.log(gradeQuiz(this.candidateAnswers));
  let finalGrade = 0
  finalGrade = gradeQuiz(candidateAnswers)
  for(i = 0 ; i < correctAnswers.length ; i++) {
    console.log(`${i+1}\) ${questions[i]}`)
    console.log('Your Answer : ',  candidateAnswers[i]);
    console.log('Correct Answer : ',  correctAnswers[i]);

  }
  console.log(`>>> Overall Grade: ${finalGrade*20}% \(${finalGrade} of ${questions.length} responses correct\) <<<`);
  if (finalGrade >= 4) {
    console.log(">>> Status: PASS <<<")
  } else {
    console.log(">>> Status: FAILED <<<")
  };


};


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};