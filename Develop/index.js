// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What do you want to name this project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What do you want in your description?'
  },
  {
    type: 'input',
    name: 'table',
    message: 'Table of contents?'
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'What are the instructions to install?'
  },
  {
    type: 'input',
    name: 'usage',
    message: ' What is this project used for?'
  },
  {
    // Need to find licenses to add to list of choices
    type: 'list',
    name: 'license',
    message: 'What license are you using?'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What kind of tests did you perform?'
  },
  {
    type: 'input',
    name: 'contact',
    message: 'How do I contact you for additional questions'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
