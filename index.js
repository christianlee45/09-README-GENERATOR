// TODO: Include packages needed for this application
const fs = require("fs");

const path = require('path');

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
let questions = [
    {
        type: "input",
        message: "What is the name of your repository?",
        name: "TITLE"
    },
    {
        type: "input",
        message: "please enter a description",
        name: "DESCRIPTION"
    },
    {
        type: "input",
        message: "list a table of contents",
        name: "TABLE OF CONTENTS"
    },
    {
        type: "input",
        name: "INSTALLATION",
        message: "Describe the installation process ",
    },
    {
        type: "input",
        name: "USAGE",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "LICENSE",
        message: "Chose the license for this project: ",
        choices: [
            "Apache", "Academic", "GNU","ISC","MIT", "Mozilla","Open"
        ]
    },
    {
        type: "input",
        name: "CONTRIBUTING",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "TESTS",
        message: "Was there any tests?"
    }, 
    {
        type: "input",
        name: "GITHUB ACCOUNT",
        message: "WHAT IS YOUR GITHUB USERNAME"
    },
    {
        type: "input",
        name: "EMAIL",
        message: "WHAT IS YOUR EMAIL"
    },

];









// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
} ;




// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('!YOUR README.MD FILE HAS BEEN SUCCESSFULLY CREATED!');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));

    }) ;

} ;


init();
// Function call to initialize app ^

