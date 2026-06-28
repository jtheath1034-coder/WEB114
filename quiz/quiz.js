"use strict";

// John Heath - June 25, 2026
// WEB114 Week 3 Project - Question Quiz Game.

/* PLANNING / PSEUDOCODE

1. Initialize score = 0 

2. Quesiton 1: What is my favorite Pokemon? 
   - Variable name: pokemonGuess
   - Correct answer: mimikyu
   - Validate that the answer is not blank.
   -Convert the answer to lowercase before checking it. 

3. Question 2: What city do I live in?
   - Variable name: cityGuess
   - Correct answer: lawrence 
   - Validate that the answer is not blank.
   - Convert the answer to lowercase before checking it.

4. Question 3: What career field am I working towards?
   - Variable name: careerGuess
   - Correct answer: health informatics
   - Validate that the answer is not blank.
   - Convert the answer to lowercase before checking it.

5. Question 4: What is my favorite number? 
   - Variable name: favoriteNumberGuess
   - Correct answer: 73
   - Hint: find the square root of 5329.
   - Validate that answeris not blank.
   - Convert the answer to a number before checking it. 
   
6. Math: 
   - Calculate percentage by dividing score by 4 and multiplying by 100.

7. Final feedback:
   - If score is 4, give excellent feeback.
   - Else if score is 3, give good feedback.
   - Else if score is 1 or 2, suggest trying again.
   - Else give a zero-score message. 

Logical operators I will use: 
- && to check that an answer exists and is not blank.
- || to alow more than one correct version of an answer.
- ! to check if an answer is missing.
*/

console.log("=== John's Personal Quiz Game ===");

// Initialize score
let score = 0;

// Question 1
let pokemonGuess = prompt("What is my favorite Pokemon?");

if (!pokemonGuess || pokemonGuess.trim() === "") {
   alert("Please enter an answer for question 1");
   console.log("Question 1 was left blank.");
} else {
   pokemonGuess = pokemonGuess.toLowerCase();

   if (pokemonGuess === "mimikyu") {
      alert("Correct! My favorite Pokemon is Mimikyu.");
      console.log("Question 1 correct.");
      score++;
   } else {
      alert("Not quite. My favorite Pokemon is Mimikyu.");
      console.log("Question 1 incorrect.");
   }
}

// Question 2
let cityGuess = prompt("What city do I live in?");

if(!cityGuess || cityGuess.trim() === "") {
   alert("Please enter an answer for question 2.");
   console.log("Question 2 was left blank.");
   } else {
      cityGuess = cityGuess.toLowerCase();

      if(cityGuess === "lawrence") {
         alert("Correct! I live in Lawrence.");
         console.log("Question 2 correct.");
         score++;
      } else {
         alert("Not quite. I live in Lawrence.");
         console.log("Question 2 incorrect.");
      }
   }

   // Question 3
   let careerGuess = prompt("What career field am I working toward?");

   if(!careerGuess || careerGuess.trim() === "") {
      alert("Please enter an answer for question 3.");
      console.log("Question 3 was left blank.");
   } else {
      careerGuess = careerGuess.toLowerCase();

      if (careerGuess === "health informatics" || careerGuess === "informatics") {
         alert("Correct! I am working toward Health Informatics.");
         console.log("Question 3 correct.");
         score++;
      } else {
         alert("Not quite. I am working toward Health Informatics.");
         console.log("Question 3 incorrect.");
      }
   }

   // Question 4
   let favoriteNumberGuess = prompt(`What is my favorite number?
      Hint: Find the square root of 5329. Please enter a number.`);
   
   if (!favoriteNumberGuess || favoriteNumberGuess.trim() === "") {
      alert("Please enter an answer for question 4.");
      console.log("Question 4 was left blank.");
   } else {
      favoriteNumberGuess = Number(favoriteNumberGuess);

      if (favoriteNumberGuess === 73) {
         alert("Correct! My favorite number is 73.");
         console.log("Question 4 correct.");
         score++;
      } else {
         alert("not quite. My favorite number is 73.");
         console.log("Question 4 incorrect.");
      }
   }

   // Calculate percentage using math
   let percentage = (score / 4) * 100;

   console.log("Final score: " + score + " out of 4");
   console.log("Final percentage: " + percentage + "%");

   // Final feedback using if / else if / else
   let finalMessage = "";

   if (score === 4) {
      finalMessage = "Excellent! You know me better than my mom.";
   } else if (score === 3) {
      finalMessage = "Good job! You know me pretty well.";
   } else if (score === 1 || score === 2) {
      finalMessage = "Not bad, but you could try again.";
   } else{
      finalMessage = "Look like you got zero correct. Better luck next time.";
   }

   // Additional feedback with logical operators
   if (score >= 3 && percentage >= 75) {
      console.log("Congratulations! You passed the quiz. ");
   } else if (score === 0 || percentage === 0) {
      console.log("I'm sorry, you did not get any answers correct");
   }

   // Final Summary alert
   alert(`Quiz Complete!
      
   You got ${score} out of 4 correct.
   Your percentage is ${percentage}%
      
   ${finalMessage}`);