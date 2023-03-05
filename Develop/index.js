// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
    name: 'instructions',
    message: 'What are the instructions to install?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is this project used for?'
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
    // Need to find licenses/badge to add to list of choices
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ['MIT', 'Mozilla Public License 2.0', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  } ,
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  
fs.writeFile(fileName, data, (err) =>
err ? console.log(err) : console.log('Successfully created README.md!')
);
  };



// TODO: Create a function to initialize app
function init() { 
  inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data)
    writeToFile('README.md', generateMarkdown(data));
})
}

// Function call to initialize app
init();
