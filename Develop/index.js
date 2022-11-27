// TODO: Include packages needed for this application
const inquirer=require("inquirer");
const fs=require("fs");

inquirer.prompt([
    {
        name:"title",
        message:"What is the title of your project?",
        type:"input"
    },
    {
        name:"description",
        message:"What is the description of your project?",
        type:"input"
    },
    {
        name:"installationInstructions",
        message:"What package was installed and steps completed for your project?",
        type:"input"
    },
    {
        name:"usage",
        message:"What instructions and examples were used for the project?",
        type:"input"
    },
    {
        name:"contribution",
        message:"Who contributes or is given credit to the project?",
        type:"input"
    },
    {
        name:"tests",
        message:"Are there any tests for your project application?",
        type:"input"
    },
    {
        name:"license",
        message:"What is the license used for the application of the project?",
        type:"list",
        choices:["Apache_2.0", "BSD 2-Clause Simplified License","GNU General Public License v3.0", "MIT"]
    },
    {
        name:"gitHubUsername",
        message:"What is your GitHub username?",
        type:"input",
        default:"Lisette33"
    },
    {
        name:"emailAddress",
        message:"What is your email username?",
        type:"input",
        default:"Lisettem367@gmail.com"
    }, 
]).then((answers) => {
    console.log(answers)
    let README="" 

    // console.log(response);
    fs.writeFile('README.md', README, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    );
});

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
