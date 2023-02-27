// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username *not your registered email*'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'A short description about the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Instructions on installing the project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of the project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How others may contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Instructions on testing the project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick the licence the project uses:',
        choices: ['MIT', 'Apache2.0', 'GPLv2', 'GPLv3', 'Boost1.0', 'The Unlicense']
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            const readmeString = generateMarkdown(answers)
            // TODO: Create a function to write README file
            fs.writeFileSync("./output/README.md", readmeString)
        })
}
// Function call to initialize app
init();
