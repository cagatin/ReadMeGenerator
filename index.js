// import modules
let inquirer = require('inquirer');
let fs = require('fs');

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
        name: 'desc'
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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0',
            'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense',
            'BSD', 'Creative Commons', 'IBM', 'Mozilla Public License 2.0'],
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
        name: 'githubUsername'
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
    //Collect the user responses. Use await keyword to wait for promise to resolve prior to logging it.
    const responses = await inquirer.prompt(questions);

    //Log the user's response
    console.log("Response: ", responses);
}

// Function call to initialize app
init();
