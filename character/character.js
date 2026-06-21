// John Heath - June 15, 2026
// Web114 Week 2 Project- Adventure Character Creator

// Store creator name and story setting 
const myName = "John";
const setting = "No-O-Two Space Station";

// Welcome message
alert (`Welcome! My name is ${myName}.
Today you will create a space hero for the ${setting}.`);

// Ask for the character name
let charName = prompt(`What is your space hero's name?`);

if (charName === null || charName === "") {
    charName = "Wanderer";
}

// Ask for pet or companion
const petName = prompt(`What type of pet or companion does ${charName} have?

Example: mini alien, robot owl, moon turtle, or astro cat.`);

// Ask for character's superpower
const superpower = prompt(`What superpower does ${charName} have?`);

// Convert training years from text to number
let trainingYearsText = prompt(`How many years has ${charName} been training?`);
let trainingYears = Number(trainingYearsText);

if (trainingYearsText === null || trainingYearsText ==="" || isNaN(trainingYears)) {
    trainingYears = 0;
}

console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

// Ask if the character likes fighting monsters
const likesFighting = confirm(`Does ${charName} like fighting monsters?
    
Click OK for YES.
Click Cancel for NO.`);

console.log(likesFighting, typeof likesFighting);

// Loading message
alert(`Gathering magic for ${charName}... almost ready!`);

// Final character story
alert(`==============================
Adventure Character Created!
===============================

Name: ${charName}
Pet/Companion: ${petName}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}

${charName} travels through the ${setting} with a loyal ${petName}.
Using their ${superpower} abilities, ${charName} prepares for the next adventure.

==============================`);