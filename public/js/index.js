const inquirer = require("inquirer");
const fs = require("fs");

const path = require("path")


const generateMarkdowns = require('../../utils/generateMarkdowns')

  
const questions = [
    {
        name: "username",
        type: "input",
        message: "What are each of the group members github usernames?",
    },
    {
        name: "email",
        type: "input",
        message: "What are each of the group members email addresses?",
    },
    {
        name: "projectName",
        type: "input",
        message: "What is the title of your project # 2?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?",
    },
    {
        name: "description",
        type: "input",
        message: "A short description of your project?",
    },
    {
        name: "license",
        type: "list",
        message: "What kind of license were used for project-2?:",
        choices: [
        {
            name: "NONE", 
            value: "NONE"
        }, 
        
        ]   
    },
    {
        name: "install",
        type: "input",
        message: "What command should be run to install dependencies?",
    },
    {
        name: "information",
        type: "input",
        message: "What does the user need to know about using the repo?",
    },
    {
        name: "contributing",
        type: "input",
        message: "What does user need to know about contributing to the repo?",
    },
];


function writeToFile (fileName, data) {
   return fs.writeFileSync(path.join(__dirname, fileName), data)
}

function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("README.md", generateMarkdowns({...answers}))
    })
}
    

init()

