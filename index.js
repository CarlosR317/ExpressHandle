const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
const fs = require("fs");


// array of questions for user
const questionsArray = [
    {
        name: "title",
        message: "What is the name of your project?",
        type: "input",
    }, {
        name: "description",
        message: "What is your project about?",
        type: "input",
    }, {
        name: "installation",
        message: "How to install?",
        type: "input",
    }, {
        name: "usage",
        message: "Information on usage?",
        type: "input",

    }, {
        name: "license",
        message: "What is the license?",
        type: 'list',
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "none"]
    }, {
        name: "contributing",
        message: "What were the contribution?",
        type: "input",
    }, {
        name: "tests",
        message: "Instructions on testing?",
        type: "input",
    }, {
        name: "github",
        message: "what is your GitHub user name?",
        type: "input",
    }, {
        name: "email",
        message: "what is your email?",
        type: "input",
    }
];


// function to initialize program 
function init() {
    inquirer.prompt(questionsArray).then((answers) => {
        console.log(answers);

        // this part builds the function that writes the data onto the ReadMe file
        var readMe = generateMarkdown(answers);
        fs.writeFile("BurgerReadme.md", readMe, function (error) {
            if (error) { return console.log(error) }
            else { console.log("success") }
        })
    })
}
// this actually gets everything going
init()