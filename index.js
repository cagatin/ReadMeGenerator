// import modules
let inquirer = require('inquirer');
let fs = require('fs');

//import generateMarkdown function
let generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter a title for the README file:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description for the README file:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter typical usage for your project:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please select a license for your project',
        choices: ['MIT License', 'GNU GPL v2', 'GNU GPL v3', 'Apache License 2.0', 'BSD 3-Clause'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please enter how to contribute to your project:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Please provide test instructions for your project:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Please enter your github username:',
        name: 'githubUserName'
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('ReadME File has been generated!')
    })

}

// TODO: Create a function to initialize app
async function init() {
    //Collect the user responses. Use await keyword to wait for promise to resolve prior to passing it to generateMarkdown function
    const responses = await inquirer.prompt(questions);

    //pass the user responses to the generateMarkdown function
    let readMeFile = generateMarkdown(responses);

    fs.writeFile('GENERATEDREADME.md', readMeFile, (err) => {
        err ? console.log(err) : console.log('Read Me File Created!');
    })
}

// Function call to initialize app
init();
