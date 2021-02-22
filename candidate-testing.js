const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

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
runProgram();

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName =  input.question("Enter the Candidates Name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let x = 0; x < question.length ; x++){
    candidateAnswer.push(input.question(question[x]));
    console.log();
    questions = questions + 1;
    candidateAnswers = candidateAnswers + 1;
    
 
  /*console.log(`1\) ${question}?`);
    candidateAnswer.push(input.question(question));
    console.log(`Correct Answer: ${correctAnswer}`);
    console.log(candidateAnswer[0].toLowerCase())
*/
  // console.log(candidateAnswer[x].toLowerCase == correctAnswer[x].toLowerCase);
  }
}

function gradeQuiz(candidateAns) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  

console.clear();  
console.log(`Candidate Name: ${candidateName}`);

  for(let y = 0 ; y < candidateAnswers ;y++){
    console.log(`${y+1}\) ${question[y]}`);
    console.log(`Your Answer: ${candidateAnswer[y]}`);
    console.log(`Correct Answer: ${correctAnswer[y]}`);
    console.log("\n")
    if( typeof correctAnswer[y] == 'string'){
      if(correctAnswer[y].toLowerCase == candidateAnswer[y].toLowerCase){
        correctAnswers = correctAnswers + 1;
      }
    } else if(typeof correctAnswer[y]  == 'boolean'){
      if((candidateAnswer[y].toLowerCase == 'true') && (correctAnswer[y] == true)) {
        correctAnswers++;
      } else if ((candidateAnswer[y].toLowerCase == 'false') && (correctAnswer[y] == false)) {
        correctAnswers++;
      }
    } else if(typeof correctAnswer[y] == 'number'){
      if(candidateAnswer[y] == correctAnswer[y]){
        correctAnswers++;
      }
    }
 /*
 if( typeof correctAnswer[y] === 'string'  ){
      if(correctAnswer[y].toLowerCase == candidateAnswer[y].toLowerCase){
        correctAnswers++;
      }
    } else if(typeof correctAnswer[y]  === 'boolean' ){
      if((candidateAnswer[y].toLowerCase == 'true') && (correctAnswer[y] == true)) {
        correctAnswers++;
      } else if ((candidateAnswer[y].toLowerCase == 'false') && (correctAnswer[y] == false)) {
        correctAnswers++;
      }
    } else if(typeof correctAnswer[y] == 'number'){
      if(toNumber(candidateAnswer[y]) == correctAnswer[y]){
        correctAnswers++;
      }
    }*/
};

grade = (correctAnswers/questions)*100;
   console.log(`>>> Overall Grade: ${grade}% \(${correctAnswers} of ${questions} responses correct\) <<<`);
    if(grade >= 80) {
      console.log(">>> Status: PASS <<<")
      } else {
        console.log(">>> Status: FAILED <<<")
        };

   
 
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
 // console.clear;
 // console.log("Candidate Name: " + candidateName);
 // console.log(gradeQuiz(this.candidateAnswers));

  gradeQuiz(candidateAnswers);


}

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