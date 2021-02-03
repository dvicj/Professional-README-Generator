// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js"); 
const fs = require("fs"); 
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const promptUserHeader = () => {
    return inquirer
    .prompt([
        { 
            type: "input",
            name: "projectname",
            message: "What is the name of your project?(Required)",
            validate: projectNameInput => {
                if (projectNameInput) {
                    console.log("Thank you! We're going to ask for some information about your project now.");
                    return true; 
                    
                } else {
                    console.log("Please enter a project name!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation to create this project?(Required)",
            validate: motivationInput => {
                if (motivationInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer.");
                    return false; 
                }
            }
        }, 
        {
            type: "checkbox", 
            name: "languages",
            message: "How did you build this projects? Please select all that apply!(Required)",
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            validate: languagesInput => {
                if (languagesInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer.");
                    return false; 
                }
            }
        },
        {
            type: "confirm",
            name: "confirmLanguage",
            message: "Did you use any other coding languages not mentioned above?",
            default: false
        }, 
        { 
            type: "input",
            name: "moreLanguages", 
            message: "What other languages did you use?",
            when: ({confirmLanguage}) => confirmLanguage

        }, 
        { 
            type: "input", 
            name: "link",
            message: "Please enter a link to your finished project.(Required)",
            validate: linkInput => {
                if (linkInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer.");
                    return false; 
                }
            }
        }
    ])
}; 

const promptUserBody = () => {
    return inquirer
    .prompt([
        { 
            type: "input",
            name: "installation",
            message: "What does the user need to install your project?(Required)",
            validate: installationInput => {
                if (installationInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: "input", 
            name: "steps",
            message: "What are the steps required to install your project?(Required)",
            validate: stepsInput => {
                if (stepsInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }

        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage for this project?(Required)",
            validate: usageInput => {
                if (usageInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "features",
            message: "What are the features of your project?(Required)",
            validate: featuresInput => {
                if (featuresInput) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "confirm",
            name: "confirmFeatures",
            message: "Do you have anymore features you would like to add?",
            default: false
        }, 
        {
            type: "input",
            name: "moreFeatures",
            message: "What other features does your project have?(Required)",
            when: ({confirmFeatures}) => confirmFeatures, 
            validate: moreFeatures => {
                if (moreFeatures) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: "input",
            name: "confirmCollaborators",
            message: "Did you work with anyone else on this project?",
            default: false
        }, 
        {
            type: "input",
            name: "collaborators",
            message: "Please enter the username of your collaborator.(Required)",
            when: ({confirmCollaborators}) => confirmCollaborators, 
            validate: collaborators => {
                if (collaborators) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "confirm",
            name: "confirmCredits",
            message: "Did you have any sources you would like to credit?",
            default: false
        },
        {
            type: "input",
            name: "credits",
            message: "Please enter your sources here.",
            when: ({confirmCredits}) => confirmCredits, 
            validate: credits => {
                if (credits) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: "confirm",
            name: "confirmIssues",
            message: "Did you have any problems working on this project?",
            default: false 
        },
        {
            type: "input",
            name: "issues",
            message: "Please enter your issues here.",
            when: ({confirmIssues}) => confirmIssues, 
            validate: issues => {
                if (issues) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please choose a license.(Required)",
            choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclips Public License version 2.0'],
            validate: license => {
                if (license) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?(Required)",
            validate: github => {
                if (github) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?(Required)",
            validate: email => {
                if (email) {
                    console.log("Thank you!");
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        }
    ])
}; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
